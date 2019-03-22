const express = require('express');
const cors = require('cors');
const path = require('path');
const { Apollo } = require('orkid-api');

function initServer(redisClient) {
  if (!redisClient) {
    throw new Error('A redisClient (`ioredis` instance) is required.');
  }

  const app = express();
  app.use(cors());
  app.set('x-powered-by', false);

  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const redis = redisClient.duplicate();
  const apollo = Apollo(redis);
  apollo.applyMiddleware({ app, path: '/api/graphql' });
  return app;
}

module.exports = initServer;
