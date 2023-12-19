const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    deliveryAvailable: {
        type: Boolean,
    },
    productImage: {
        type: String,
    },
    productDescription: {
        type: String,
    }

});

module.exports = mongoose.model("Product", productSchema);