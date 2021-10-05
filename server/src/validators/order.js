const Joi = require('@hapi/joi');

createOrder = Joi.object({
    userId: Joi.string().min(3).required(),
    name: Joi.string().min(3).required(),
    address: Joi.string().min(3).required(),
    city: Joi.string().min(3).required(),
    country: Joi.string().min(3).required(),
    postal: Joi.string().min(5).required(),
    phoneNumber: Joi.string().min(11).required(),
});

module.exports = {
    createOrder,
};
