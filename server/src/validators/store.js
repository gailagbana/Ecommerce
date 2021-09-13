const Joi = require('@hapi/joi');

createStore = Joi.object({
    sellerId: Joi.string().min(1).max(Number.MAX_SAFE_INTEGER).required(),
    name: Joi.string().min(3).required(),
    description: Joi.string(),
    productId: Joi.array().required(),
});
module.exports = {
    createStore,
};
