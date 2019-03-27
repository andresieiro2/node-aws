import express from 'express';

import sampleRoutes from './sample';
import { basicAuth } from './../middlewares/auth';

const routes = {
  init: app => {
    // sample basic auth
    app.use(basicAuth);

    //rotas
    app.use('/sample', sampleRoutes());

    // default routes
    app.get('/', (request, response) => {
      response.status(200).send(`Pagina inicial`);
    });

    app.get('*', (request, response) => {
      response.status(404).send(`Esta página não foi encontrada`);
    });
  },
};

export default routes;
