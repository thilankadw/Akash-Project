const { CreateOrder, UpdateOrderStatus, OrderDetails, AllOrders } = require('../controllers/orderController')
const router = require('express').Router();
const { isAuthenticated } = require('../middleware/auth');

router.post('/create-order/:id', CreateOrder);
router.get('/all-orders', isAuthenticated, AllOrders);
router.get('/order-details/:id', isAuthenticated, OrderDetails);
router.put('/update-status/:id', isAuthenticated, UpdateOrderStatus);

module.exports = router;