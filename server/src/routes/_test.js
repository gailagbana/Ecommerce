const router = require('express').Router();
const { handle404, handleError, setupRequest, processResponse } = require('../middlewares/http');

/** Route Handlers */
const testRouteHandler = require('./test');

/** Cross Origin Handling */
router.use(setupRequest);
router.use('/api/', testRouteHandler);
router.use(processResponse);

router.use(handle404);
router.use(handleError);

module.exports = router;
