// fonte: https://www.regextester.com/99555
const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

const emailVerifier = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!email.includes('@') || !email.includes('.com')) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const passwordVerifier = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

const tokenVerifier = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    next({ status: 401, message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    next({ status: 401, message: 'Token inválido' });
  }
  next();
};

const nameVerifier = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    next({ status: 400, message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    next({ status: 400, message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const ageVerifier = (req, res, next) => {
  const { age } = req.body;
  if (!age || age === '') {
    next({ status: 400, message: 'O campo "age" é obrigatório' });
  }
  if (+age < 18) {
    next({ status: 400, message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const talkerVerifier = (req, res, next) => {
  const { talk } = req.body;
  if (!talk
    || !talk.watchedAt
    || talk.rate === undefined) {
    return next({ status: 400,
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

const watchedAtVerifier = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  if (watchedAt === '') {
    return next({ status: 400,
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    
    // return res.status(400).json({
    //   message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    // });
  }
  if (!dateRegex.test(watchedAt)) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};

const rateVerifier = (req, res, next) => {
  const { rate } = req.body.talk;
  if (rate === '') {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  if (+rate > 5 || +rate < 1) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }
  next();
};

module.exports = {
  emailVerifier,
  passwordVerifier,
  tokenVerifier,
  nameVerifier,
  ageVerifier,
  talkerVerifier,
  watchedAtVerifier,
  rateVerifier,
};
