const { CollectionsFactory, classes } = require('../db/CollectionsFactory');
const { handleCommonError, handleCommonResponse } = require('../helpers/responses');

const getTopics = async (req, res) => {
  try {
    const Topic = new CollectionsFactory(classes.TOPIC);
    const topics = await Topic.find();
    handleCommonResponse(res, { topics });
  } catch (error) {
    handleCommonError(res, error);
  }
};

module.exports = {
  getTopics
};
