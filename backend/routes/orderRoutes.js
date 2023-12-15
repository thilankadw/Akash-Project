const { CreateOrder, UpdateOrderStatus, OrderDetails, AllOrders } = require('../controllers/orderController')
const router = require('express').Router();

router.post('/create-order', CreateOrder);
router.get('/all-orders', AllOrders);
router.get('/order-details/:id', OrderDetails);
router.put('/update-status/:id', UpdateOrderStatus);

module.exports = router;