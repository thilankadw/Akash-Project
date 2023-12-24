const { GetAllproducts } = require('../controllers/productController');
const { isAuthenticated } = require('../middleware/auth');
const router = require('express').Router();


router.post('/all-products', isAuthenticated, GetAllproducts);
module.exports = router;