#!/usr/bin/env node

// Get env variables
const nodeEnv = process.env.NODE_ENV;
const host = process.env.HTTP_HOST || '0.0.0.0';
const port = process.env.HTTP_PORT || 3000;
const user = process.env.HTTP_USER;
const pass = process.env.HTTP_PASSWORD;
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT || 6379;

if (nodeEnv === 'production') {
  if (!user || !pass) {
    throw new Error('HTTP_USER and HTTP_PASSWORD environment variables are required in production mode');
  }

  if (!redisHost) {
    throw new Error('REDIS_HOST environment variable is required in production mode');
  }
}

const orkidUI = require('../index');

const redisConfig = {
  port: redisPort,
  host: redisHost
};

const express = orkidUI(redisConfig, user, pass);

express.listen(port, host, () => {
  console.log(`Orkid UI ready at http://${host}:${port}`);
});
