const { verifyAuthToken } = require('../utilities/encryption');

async function isAuthenticated(request, response, next) {
    try {
        const token = request.header('Authorization');
        if (!token) throw new Error('Access denied. No token provided.');

        const decoded = await verifyAuthToken(token);
        request.user = decoded;
        return next();
    } catch (e) {
        const err = {
            status: 401,
            error: `isAuthenticated: ${e.message}`,
        };
        return next(err);
    }
}

async function isAdmin(request, response, next) {
    try {
        if (request.user[0].role !== 'admin') {
            throw new Error("You don't have enough permission to perform this action");
        }
        return next();
    } catch (e) {
        const err = {
            status: 401,
            error: `isAdmin: ${e.message}`,
        };
        return next(err);
    }
}

async function isSeller(request, response, next) {
    try {
        if (request.user[0].role !== 'seller')
            throw new Error("You don't have enough permission to perform this action");
        return next();
    } catch (e) {
        const err = {
            status: 401,
            error: `isSeller: ${e.message}`,
        };
        return next(err);
    }
}
async function isAdminOrSeller(request, response, next) {
    try {
        if (request.user[0].role !== 'seller' && request.user[0].role !== 'admin')
            throw new Error("You don't have enough permission to perform this action");
        return next();
    } catch (e) {
        const err = {
            status: 401,
            error: `isAdminOrSeller: ${e.message}`,
        };
        return next(err);
    }
}

module.exports = { isAuthenticated, isAdmin, isSeller, isAdminOrSeller };
