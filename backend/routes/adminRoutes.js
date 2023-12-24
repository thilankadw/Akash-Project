const { ViewAllProducts, UpdatePrice, AddProduct } = require('../controllers/adminController')
const router = require('express').Router()

router.post('/add-product', AddProduct)
router.get('/view-products', ViewAllProducts)
router.put('/update-price/:id', UpdatePrice)

module.exports = router;