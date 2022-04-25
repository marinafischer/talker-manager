const express = require('express');
const getTalker = require('../helpers/getTalker');
const postTalker = require('../helpers/postTalker');
const verfier = require('../helpers/verifier');

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

router.post('/',
  verfier.tokenVerifier,
  verfier.nameVerifier,
  verfier.ageVerifier,
  verfier.talkerVerifier,
  verfier.watchedAtVerifier,
  verfier.rateVerifier,
  async (req, res) => {
  const talker = await getTalker();
  const newTalker = { id: (talker.length + 1), ...req.body };
  talker.push(newTalker);
  postTalker(talker);
  res.status(201).json(newTalker);
});

router.put('/:id', 
  verfier.tokenVerifier,
  verfier.nameVerifier,
  verfier.ageVerifier,
  verfier.talkerVerifier,
  verfier.watchedAtVerifier,
  verfier.rateVerifier,
  async (req, res) => {
  const { id } = req.params;
  const talker = await getTalker();
  talker.map((t, i) => {
    if (+t.id === +id) {
      talker[i] = { id: +id, ...req.body };
    }
    return t;
  });
  postTalker(talker);
  res.status(200).json({ id: +id, ...req.body });
});

module.exports = router;