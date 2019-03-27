import 'babel-polyfill';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// fix requisicoes sem body
app.use(async (req, res, next) => {
  try {
    req.body = await JSON.parse(req.body);
  } catch (e) {
    //req sem body
  }

  next();
});

routes.init(app);

export default app;
