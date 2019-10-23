const { getDB } = require('../init');

const RegisteredCollections = require('./registeredCollections');

class CollectionsFactory {
  /**
   * It behaves always like a factory, except the first time when you have to connect to the DB. That's why initDB() is a
   * static method
   * @param {*} db
   * @param {string} type
   */
  constructor(type) {
    this.collection = new RegisteredCollections[type](getDB());
  }

  addDocument(doc) {
    return Array.isArray(doc) ? this.collection.insertMany(doc) : this.collection.insertOne();
  }

  /**
   * Find a document. if all => findAll()
   * @param {boolean} all
   * @param {object} filters
   * @param {object} options
   */
  async find(one, filters, options) {
    filters = filters || {};
    options = options || {};

    return one
      ? this.collection.findOne(filters, options)
      : this.collection.find(filters, options).toArray();
  }
}

const classes = {
  CONTACT: 'contact',
  EXPERIENCE: 'experience',
  TOPIC: 'topic'
};

module.exports = { CollectionsFactory, classes };
