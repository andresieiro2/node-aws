import Joi from 'joi';

export const sampleSchema = {
  email: Joi.string()
    .email()
    .required(),
  user: Joi.string().required(),
};
