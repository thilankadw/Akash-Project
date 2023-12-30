const { GetAllproducts, ProductDetails } = require('../controllers/productController');
const { isAuthenticated } = require('../middleware/auth');
const router = require('express').Router();


router.post('/all-products', GetAllproducts);
router.get('/products-details', ProductDetails);

module.exports = router;