const Product = require("../models/productModel");

module.exports.GetAllproducts = async (req,res) => {

    try {

        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const type = req.query.type

        let products;

        if (type === 'all') {
            products = await Product.find();
        } else {
            products = await Product.find({ productType: type });
        }

        const startIndex = (page - 1) * limit
        const lastIndex = (page) * limit
      
        const results = {}

        if (!products) {
            return res.status(400).json({message:"No products found.", success: true,});
        }

        if (products) {
            results.totalProducts=products.length;
            results.totalPages=Math.ceil(products.length/limit);
        
            if (lastIndex < products.length) {
                results.next = {
                    page: page + 1,
                }
            }
            if (startIndex > 0) {
                results.prev = {
                    page: page - 1,
                }
            }
            results.productsList = products.slice(startIndex, lastIndex);
            
            res
                .status(201)
                .json({ message: "Product details found.", success: true, productDetails: results});
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