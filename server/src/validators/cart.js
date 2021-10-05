const Joi = require('@hapi/joi');

addInventoryToCart = Joi.object({
    userId: Joi.string().required(),
    cartInventory: Joi.array().required(),
});

module.exports = {
    addInventoryToCart,
};
