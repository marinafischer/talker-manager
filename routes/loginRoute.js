const express = require('express');
const verifier = require('../helpers/verifier');

const router = express.Router();

router.post(
  '/',
  verifier.emailVerifier,
  verifier.passwordVerifier,
  (req, res) => {
    const date = new Date().getTime();
    const token = `a${date}Cd`;
    res.status(200).json({ token });
  },
);

module.exports = router;