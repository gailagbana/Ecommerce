const Joi = require('@hapi/joi');

createInventory = Joi.object({
    categoryId: Joi.string().min(1).max(Number.MAX_SAFE_INTEGER).required(),
    sellerId: Joi.string().min(1).max(Number.MAX_SAFE_INTEGER).required(),
    name: Joi.string().min(3).required(),
    description: Joi.string(),
    quantity: Joi.string().required(),
    price: Joi.string().required(),
});

module.exports = {
    createInventory,
};
