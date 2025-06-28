import Joi from 'joi';

export const productCreatingSchema = Joi.object({
  name: Joi.string().required().max(128),
  price: Joi.number().required().min(0).max(1000000),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
  description: Joi.string().max(500),
});
