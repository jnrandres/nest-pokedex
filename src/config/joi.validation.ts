import * as Joi from 'joi';

export const JoiValidationSchema: Joi.ObjectSchema = Joi.object({
  PORT: Joi.number().default(3000),
  MONGO_DB: Joi.string().required(),
  DEFAULT_LIMIT: Joi.number().default(10),
});