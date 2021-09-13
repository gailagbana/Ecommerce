const router = require('express').Router();
const Controller = require('../controllers/index');
const cartSchemaValidator = require('../validators/cart');

const { isAuthenticated } = require('../middlewares/auth');
const cartController = new Controller('Cart');
const SampleService = require('../services/cart/cart.service');

const cartService = new SampleService(cartController, cartSchemaValidator);

try {
    router
        //.use(isAuthenticated)
        .post('/', async (request, response, next) => {
            request.payload = await cartService.createCart(request, next);
            next();
        })
        .get('/:id', async (request, response, next) => {
            request.payload = await cartService.readCartById(request, next);
            next();
        })
        .put('/:id', async (request, response, next) => {
            request.payload = await cartService.addInventoryToCart(request, next);
            next();
        })
        .put('/delete/:id', async (request, response, next) => {
            request.payload = await cartService.removeInventoryByIdFromCartById(request, next);
            next();
        });
} catch (e) {
    console.log(`[Route Error] /Cart: ${e.message}`);
} finally {
    module.exports = router;
}
