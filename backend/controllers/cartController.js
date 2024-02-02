const Cart = require("../models/cartModel");

module.exports.AddToCart = async (req,res) => {

    try {

        const { productName, productPrice, cartImage } = req.body

        const userId = req.params.id

        const productId = req.body.id
        const quantity = req.body.productQuantity

        if(!(productId || userId || quantity || productName || productPrice)){
            return res.json({ message: "Required information are missing.", success: false })
        }

        const isExist = await Cart.findOne({userId, productId})

        if(isExist){
            return res.status(400).json({ message: "Product is already added to the cart.", success: false });
        }

        const cart = await Cart.create({ userId, productId, productName, productPrice, quantity, cartImage });

        if (!cart) {
            return res.status(400).json({ message: "Couldn't add to cart.", success: false });
        }
      
        if(cart){
            res
            .status(201)
            .json({ message: "Added to cart successfully.", success: true});
        }
        
    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });

    }
};

module.exports.ViewCart = async (req,res) => {

    try {

        const userId = req.params.id;

        const cart = await Cart.find({ userId }).lean();

        if(!cart){
            return res.status(400).json({ message: "Your cart is empty.", success: false});
        }

        if(cart){
            res
            .status(201)
            .json({ message: "Found cart items.", success: true, cartProducts: cart});
        }
        
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });

    }

};

module.exports.DeleteCartItem = async (req,res) => {

    try {

        const { productId } = req.body;

        const userId = req.params.id;

        if(!(productId || userId)){
            return res.status(400).json({ message: "Required fields are missing.", success: false });
        }

        const deleteCart = await Cart.findOneAndDelete({userId, productId});

        if(!deleteCart){
            return res.status(400).json({ message: "Couldn't delete item from cart.", success: false });
        }

        if(deleteCart){
            res
            .status(201)
            .json({ message: "Item removed from cart.", success: true});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });
    }

};