const Rollbar = require('rollbar');

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_KEY,
  captureUncaught: true,
  captureUnhandledRejections: true
});

// save an error message in Rollbar
const logErrorInRollbar = msg => rollbar.error(msg);

module.exports = {
  logErrorInRollbar
};
