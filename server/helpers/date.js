const moment = require('moment');

const getNow = () => moment().format('DD-MM-YYYY HH:MM');

module.exports = {
  getNow
};
