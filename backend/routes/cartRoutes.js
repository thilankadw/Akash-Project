const { AddToCart, ViewCart, DeleteCartItem } = require('../controllers/cartController')
const router = require('express').Router();
const { isAuthenticated } = require('../middleware/auth');

router.post('/add-to-cart/:id', AddToCart);
router.get('/view-cart/:id', ViewCart);
router.delete('/delete-from-cart/:id', DeleteCartItem);

module.exports = router;