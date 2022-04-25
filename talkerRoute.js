const express = require('express');
const getTalker = require('./helpers/getTalker');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await getTalker();
  const findTalker = talker.find((t) => t.id === +id);
  if (findTalker) return res.status(200).json(findTalker);
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

router.get('/', async (req, res) => {
  const talker = await getTalker();
  res.status(200).json(talker);
});

module.exports = router;