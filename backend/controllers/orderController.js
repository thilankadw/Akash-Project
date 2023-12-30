const Order = require("../models/orderModel");

module.exports.CreateOrder = async (req,res) => {

    try {

        const { items, totalAmount } = req.body.data;

        const userId = req.params.id;
        console.log(req.body)

        if(!(items && totalAmount)){
            console.log("Required information are missing");
            return res.json({ message: "Required information are missing.", success: false })
        }

        // program to generate random strings

        // declare all characters
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        let orderId;
        let idExists = false;

        do {
            orderId = generateString(7);

            console.log('orderId', orderId);

            let checkId = await Order.find({orderId});
            console.log('checkId',checkId)

            if(checkId.length> 0){
                idExists = true;
            }else{
                idExists = false;
            }
            
        } while (idExists);

        const order = await Order.create({ userId, items, totalAmount, orderId });

        if (!order) {
            console.log("Order not success.");
            return res.status(400).json({ message: "Order not success.", success: false });
        }
      
        if(order){
            console.log("Order placed successfully.");
            res
            .status(201)
            .json({ message: "Order placed successfully.", orderId: orderId, success: true});
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

module.exports.UserOrders = async (req,res) => {

    try {

        const orders = await Order.findById(req.params.id);

        if (!orders) {
            return res.status(400).json({message:"Order not found.", success: true,});
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