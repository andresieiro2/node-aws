import config from 'config';
import btoa from 'btoa';

export const basicAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send({ message: 'Credenciais inexistentes' });
    return false;
  }

  const reqAuth = req.headers.authorization.split(' ')[1];

  const auth = btoa(
    `${config.get('BASIC_AUTH_USER')}:${config.get('BASIC_AUTH_PASSWORD')}`
  );

  if (auth === reqAuth) {
    next();
  } else {
    res.status(401).send({ message: e.message || 'Credenciais inválidas' });
  }
};
