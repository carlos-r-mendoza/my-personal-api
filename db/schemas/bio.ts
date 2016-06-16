import * as Joi from 'joi';

const bio = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  lastName2: Joi.string().default(null),
  middleName: Joi.string().default(null)
});

export { bio }