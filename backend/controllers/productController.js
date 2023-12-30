const Product = require("../models/productModel");

module.exports.GetAllproducts = async (req,res) => {

    try {
    
        const products = await Product.find();

        if (!products) {
            console.log("Products not found.");
            return res.status(400).json({message:"No products found.", success: true,});
        }

        if (products) {
            console.log("Products found.");
            res
                .status(201)
                .json({ message: "Product details found.", success: true, productDetails: products});
        }
        
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });
        
    }

};

module.exports.ProductDetails = async (req,res) => {

    try {

        const { productId } = req.body;

        const productdetails = await Product.findById(productId);

        if (!productdetails) {
            return res.status(400).json({message:"Product not found.", success: true,});
        }

        if (productdetails) {
            res
                .status(201)
                .json({ message: "Product details found.", success: true, productDetails: productdetails});
        }
        
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });

    }

};