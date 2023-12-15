const Order = require("../models/orderModel");

module.exports.CreateOrder = async (req,res) => {

    try {

        const { userId, productId, productPrice, orderAmount, totalPrice, deliver, deliverAddress, paymentInfo, status, createdAt } = req.body;

        if(!(deliver && deliverAddress)){
            return res.json({ message: "Dilver Address is required.", success: false })
        }

        const order = await Order.create({ userId, productId, productPrice, orderAmount, totalPrice, deliver, deliverAddress, paymentInfo, status, createdAt });

        if (!order) {
            return res.status(400).json({ message: "Order not success.", success: false });
        }
      
        if(order){
            res
            .status(201)
            .json({ message: "Order placed successfully.", success: true});
        }
        
    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });

    }
};

module.exports.UpdateOrderStatus = async (req,res) => {

    try {

        const orderId = req.params.id;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(400).json({message:"Order not found.", success: true,});
        }

        const { newStatus } = req.body; 

        // if (!newStatus) {
        //     return res.json({ message: "Order update is unsuccessful.", success: false });
        // }

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { $set: { orderStatus: newStatus } },
            { new: true }
          );
      
        if(updatedOrder){
            res.status(201).json({
                message: 'Order status updated successfully',
                success: true,
                updatedOrder: updatedOrder,
            });
        }else{
            res.status(400).json({
                message: 'Order status not updated.',
                success: false,
            });
        }
          
        
    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });

    }

}

module.exports.OrderDetails = async (req,res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(400).json({message:"Order not found.", success: true,});
        }

        if (order) {
            res
                .status(201)
                .json({ message: "Order details found.", success: true, orderDetails: order});
        }
        
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });

    }

}

module.exports.AllOrders = async (req,res) => {

    try {

        const orders = await Order.find();

        if (!orders) {
            return res.status(400).json({message:"No orders found.", success: true,});
        }

        if (orders) {
            res
                .status(201)
                .json({ message: "Order details found.", success: true, orderDetails: orders});
        }
        
    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });
        
    }

}