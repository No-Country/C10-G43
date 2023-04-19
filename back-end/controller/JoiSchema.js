const Joi = require('joi');

const JoiuserSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    extensionNumber: Joi.number().required(),
    phoneNumber: Joi.number().required(),
    identificationType: Joi.string().required(),
    identificationNumber: Joi.number().required(),
    address: Joi.string().required(),
    password: Joi.string().required(),
    isVerified: Joi.boolean(),
    isAdmin: Joi.boolean(),
    country: Joi.string().required(),
  });
  
  module.exports = JoiuserSchema;