const Joi = require('@hapi/joi');

addInventoryToCart = Joi.object({
    userId: Joi.string().required(),
    productId: Joi.array().required(),
});

module.exports = {
    addInventoryToCart,
};
