const { AddToCart, ViewCart, DeleteCartItem } = require('../controllers/cartController')
const router = require('express').Router();
const { isAuthenticated } = require('../middleware/auth');

router.post('/add-to-cart/:id', isAuthenticated, AddToCart);
router.get('/view-cart/:id', isAuthenticated, ViewCart);
router.delete('/delete-from-cart/:id', isAuthenticated, DeleteCartItem);

module.exports = router;