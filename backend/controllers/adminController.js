const Product = require("../models/productModel");
const Harvest = require("../models/harvestModel");
const uploadImage = require("../utils/uploadImage");

module.exports.AddProduct = async (req,res) => {

    try {

        const { productId, productName, productPrice, deliveryAvailable, productDescription } = req.body;
        
        const imageFile = req.file;

        const existingProduct = await Product.findOne({ productId });

        if (existingProduct) {
            return res
                .status(400)
                .json({ message: "Product is already in the store. Check product ID.", success: false });
        }

        if(!(productId && productName && productPrice)) {
            return res
                .status(400)
                .json({ message: "Required feilds are missing.", success: false });
        }

        const productImage = await uploadImage(req);

        const product = await Product.create({ productId, productName, productPrice, deliveryAvailable, productImage, productDescription });
        
        if(!product) {
            return res
                .status(400)
                .json({ message: "Couldn't added the product.", success: false });
        }

        if(product){
            res
            .status(201)
            .json({ message: "Product added successfully.", success: true});
        }else {
            return res.status(500).json({ message: "An error occurred.", success: false });
        }    

    } catch (error) {

        console.error(error);
        return res.status(500).json({ message: "An error occurred.", success: false });

    }

};

module.exports.ViewAllProducts = async (req,res) => {

    try {

        const product = await Product.find();

        if(!product) {
            return res
                .status(400)
                .json({message:"No products found.", success: true,});
        }else if(product){
            return res
                .status(201)
                .json({ message: "Product details found.", success: true, allProducts: product,});
        }else {
            return res.status(500).json({ message: "An error occurred.", success: false });
        }     

    } catch (error) {

        console.error(error);
        return res.status(500).json({ message: "An error occurred.", success: false });
        
    }

} 

module.exports.UpdatePrice = async (req,res) => {

    try {

        const productId = req.params.id;
        const newPrice = req.body;

        const product = await Product.findById({productId});

        if(!product){
            return res
                .status(400)
                .json({ message: "No products found.", success: false });
        }else if(product){

            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                { $set: { productPrice: newPrice } },
                { new: true }
            );

            if(updatedProduct){
                return res
                    .status(201)
                    .json({ message: 'Product price updated successfully', success: true, updatedProduct: updatedProduct });
            }else{
                res.status(400).json({
                    message: 'Product price not updated.',
                    success: false,
                });
            }

        }else {
            return res.status(500).json({ message: "An error occurred.", success: false });
        }
        
    } catch (error) {

        console.error(error);
        return res.status(500).json({ message: "An error occurred.", success: false });
        
    }

}

module.exports.DeleteProduct = async (req,res) => {

    try {

        const productId = req.params.id;

        const existingProduct = await Product.findOne({ productId });

        if (!existingProduct) {
            return res
                .status(400)
                .json({ message: "Can't find the product.", success: false });
        }

        if (existingProduct) {
            const deletedProduct = await Product.findByIdAndDelete({productId});

            if (deletedProduct) {
                return res
                    .status(201)
                    .json({ message: "Product deleted successfully.", success: true });
            }else {
                return res
                    .status(400)
                    .json({ message: "Could't delete the product.", success: false });
            }

        }

        return res.status(500).json({ message: "An error occurred.", success: false });
        
    } catch (error) {

        console.error(error);
        return res.status(500).json({ message: "An error occurred.", success: false });
        
    }

}

module.exports.UpdateSellRequest = async (req,res) => {

    try {

        const requestId = req.params.id;
        const newStatus = req.body;

        const request = await Harvest.findById({requestId});

        if(!request){
            return res
                .status(400)
                .json({ message: "No requests found.", success: false });
        }else if(request){

            const updatedRequest = await Harvest.findByIdAndUpdate(
                requestId,
                { $set: { status: newStatus } },
                { new: true }
            );

            if(updatedRequest){
                return res
                    .status(201)
                    .json({ message: 'Request status updated successfully', success: true, updatedRequest: updatedRequest });
            }else{
                res.status(400).json({
                    message: 'Request status not updated.',
                    success: false,
                });
            }

        }else {
            return res.status(500).json({ message: "An error occurred.", success: false });
        }
        
    } catch (error) {

        console.error(error);
        return res.status(500).json({ message: "An error occurred.", success: false });
        
    }

}