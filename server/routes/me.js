const express = require('express');

const { getTopics } = require('../controllers/me');

const router = express.Router();

router.get('/getTopics', getTopics);

module.exports = router;
