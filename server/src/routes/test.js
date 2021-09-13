const router = require('express').Router();

router.get('/', (request, response, next) => {
    response.send('Api is working');
});

module.exports = router;
