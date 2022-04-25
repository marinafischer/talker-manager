const express = require('express');
const getTalker = require('./helpers/getTalker');

const router = express.Router();

router.get('/', async (req, res) => {
  const talker = await getTalker();
  res.status(200).json(talker);
});

module.exports = router;