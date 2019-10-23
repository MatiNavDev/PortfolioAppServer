const { db } = require('../init');

/**
 * Creates a subProperty to be used in the jsonSchema
 * @param {string} propertyName
 * @param {string} type
 */
const createPropertySubSchema = (propertyName, type) => {
  const bsonType = type || 'string';
  return {
    bsonType,
    description: `${propertyName} must be a ${bsonType}`
  };
};

/**
 * Creates an object that will be used like a schema for validate the db collection
 * @param {*} subProperties
 */
const createSchema = subProperties => {
  let properties = {};
  subProperties.forEach(p => {
    properties = { ...properties, [p]: createPropertySubSchema(p) };
  });

  return {
    bsonType: 'object',
    required: subProperties,
    properties
  };
};

/**
 * Makes a collection from this params
 * @param {string} name
 * @param {string[]} subProperties
 */
const createCollection = (name, subProperties) => {
  const schema = createSchema(subProperties);
  db.createCollection(name, { validator: { $jsonSchema: schema } });
};

/**
 * Creates topic collections
 */

const createTopics = () => {
  const name = 'topics';
  const subProperties = ['text', 'topic', 'image'];

  createCollection(name, subProperties);
};

/**
 * Creates experiencies collection
 */
const createExperiences = () => {
  const name = 'experiencies';
  const subProperties = ['type', 'title', 'mainImage', 'textBody'];

  createCollection(name, subProperties);
};

/**
 * Creates contacts collection
 */
const createContacts = () => {
  const name = 'contact';
  const subProperties = ['text', 'image', 'url'];

  createCollection(name, subProperties);
};

/**
 * Creates all collections
 */
const createCollections = () => {
  try {
    createTopics();
    createExperiences();
    createContacts();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCollections
};
