const { logInRollbar } = require('../helpers/rollbar');

const getTopics = (req, res) => {
  try {
    res.send({ ok: 'ok' });
  } catch (error) {
    logInRollbar(error.message);
  }
};

module.exports = {
  getTopics
};
