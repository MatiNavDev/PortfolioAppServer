const { initializeApp } = require('./helpers/app');
const { initDB, createCollections } = require('./db/init');

let app;

const init = async () => {
  await initDB();
  createCollections();

  app = initializeApp();
};

init();
module.exports = {
  app
};
