import Joi from "joi";

const getPowerValidation = Joi.object({
  host: Joi.string().ip(),
  register: Joi.number().positive(),
});

export { getPowerValidation };
