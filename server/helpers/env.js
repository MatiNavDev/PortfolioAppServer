const isEnvTest = () => process.env.NODE_ENV === 'TEST';

module.exports = {
  isEnvTest
};