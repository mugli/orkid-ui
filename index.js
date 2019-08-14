const express = require('express');
const cors = require('cors');
const path = require('path');
const auth = require('basic-auth');
const morgan = require('morgan');

const { Apollo } = require('orkid-api');

function initServer(redisConfig, httpUser, httpPass) {
  if (!redisConfig) {
    throw new Error('Redis configuration is required.');
  }

  const app = express();
  app.use(cors());
  app.set('x-powered-by', false);
  app.use(morgan('combined'));

  if (httpUser && httpPass) {
    console.log('Using basic authentication');
    app.use(function(request, response, next) {
      var user = auth(request);
      if (!user || httpUser !== user.name || httpPass !== user.pass) {
        response.set('WWW-Authenticate', 'Basic realm="Orkid"');
        return response.status(401).send();
      }
      return next();
    });
  }

  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const apollo = Apollo(redisConfig);
  apollo.applyMiddleware({ app, path: '/api/graphql' });

  return app;
}

module.exports = initServer;
