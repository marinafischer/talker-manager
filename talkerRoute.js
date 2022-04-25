const express = require('express');
const fs = require('fs/promises');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const talker = await fs.readFile('./talker.json', 'utf-8');
    res.status(200).json(JSON.parse(talker));
  } catch (e) {
    res.status(200).json(JSON.parse([]));
    return [];
  }
});

module.exports = router;