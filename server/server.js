const { initializeApp } = require('./helpers/app');
const { insertTopics } = require('./db/initialQueries/initialInserts');
const { logErrorInRollbar } = require('./helpers/rollbar');
const { initDB } = require('./db/init');

let app;

const init = async function() {
  try {
    await initDB();
    // insertTopics();
    app = initializeApp();
  } catch (error) {
    logErrorInRollbar(error);
  }
};

init();

module.exports = {
  app
};
