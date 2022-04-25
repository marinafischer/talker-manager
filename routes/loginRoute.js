const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const date = new Date().getTime();
  const token = `a${date}Cd`;
  console.log(token);
  console.log(email);
  console.log(password);
  res.status(200).json({ token });
});

module.exports = router;