import express from 'express';
import Joi from './../middlewares/joi';
import * as schemas from './../schemas/sample';

import Controller from './../controllers/sample';

const configurationRoutes = () => {
  const router = express.Router();

  router.get('/', Joi.joiValidate(schemas.sampleSchema), async (req, res) => {
    try {
      const sample = await Controller.get(req);
      res.status(200).send(sample);
    } catch (e) {
      res.status(e.code || 400).send(e);
    }
  });

  return router;
};

export default configurationRoutes;
