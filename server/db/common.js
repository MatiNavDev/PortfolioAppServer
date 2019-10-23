const { db } = require('./init');

/**
 * Returns an instance of collection
 * @param {string} collectionName
 */
const getMongoCollection = collectionName => {
  db.collection(collectionName);
};

module.exports = {
  getMongoCollection
};
