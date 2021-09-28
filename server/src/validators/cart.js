const Joi = require('@hapi/joi');

addInventoryToCart = Joi.object({
    userId: Joi.string().required(),
    cartInventory: Joi.object().required(),
});

module.exports = {
    addInventoryToCart,
};
