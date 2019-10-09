const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { isEnvTest } = require('./env');
const meRoutes = require('../routes/me');

let app;
const routeInitialText = '/api/v1';

/**
 * Use morgan to log all requests
 */
const logAllRequests = () => {
  app.use(morgan('combined'));
};

/**
 * Initialize app routes
 */
const initializeRoutes = () => {
  app.use(`${routeInitialText}/me`, meRoutes);
};

/**
 * Initialize test routes
 */
const initializeTestRoutes = () => {};

const initializeApp = () => {
  app = express();
  app.use(bodyParser.json());

  logAllRequests();

  initializeRoutes();
  if (isEnvTest()) initializeTestRoutes();

  const PORT = process.env.PORT || 3006;

  app.listen(PORT, () => console.log(`PortfolioServer running in port: ${PORT}`));

  return app;
};

module.exports = {
  initializeApp,
  app
};
