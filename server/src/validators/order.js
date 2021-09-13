const Joi = require('@hapi/joi');

createOrder = Joi.object({
    userId: Joi.string().required(),
    productId: Joi.array().required(),
    amount: Joi.string().required(),
});

module.exports = {
    createOrder,
};
