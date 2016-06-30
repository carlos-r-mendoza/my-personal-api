import * as Joi from 'joi';

const about = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  lastName2: Joi.string().default(null),
  middleName: Joi.string().default(null),
  education: Joi.object().keys({
    higherEd: Joi.object().keys({
      undergrad: Joi.object().keys({
        institution: Joi.string(),
        degree: Joi.string()
      })
    })
  })
});

export { about }