const Cart = require("../models/cartModel");

module.exports.AddToCart = async (req,res) => {

    try {

        const { productId, quantity } = req.body;

        const userId = req.params.id;

        if(!(productId || userId || quantity)){
            console.log("Required information are missing");
            return res.json({ message: "Required information are missing.", success: false })
        }

        const cart = await Cart.create({ userId, productId, quantity });

        if (!cart) {
            console.log("Couldn't add to cart");
            return res.status(400).json({ message: "Couldn't add to cart.", success: false });
        }
      
        if(cart){
            console.log("Added to cart successfully.");
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

        const cart = await Cart.findOne({ userId }).lean();

        if(!cart){
            console.log("Empty cart.");
            return res.status(400).json({ message: "Your cart is empty.", success: false});
        }

        if(cart){
            console.log("Found cart products.");
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
            console.log("Missing data.");
            return res.status(400).json({ message: "Required fields are missing.", success: false });
        }

        const deleteCart = Cart.findOneAndDelete({userId, productId});

        if(!deleteCart){
            console.log("Couldn't delete item from cart");
            return res.status(400).json({ message: "Couldn't delete item from cart.", success: false });
        }

        if(deleteCart){
            console.log("Item removed from cart successfully.");
            res
            .status(201)
            .json({ message: "Item removed from cart.", success: true});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });
    }

};