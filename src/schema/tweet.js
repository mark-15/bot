import Joi from 'joi'

const keys = {
  tweet: Joi
    .string()
    .required()
    .min(1)
    .max(280)
}

const schema = Joi.object().keys(keys)

export { keys, schema }
