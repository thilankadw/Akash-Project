const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number
    },
    orderAmount: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    deliver: {
        type: Boolean,
        default: false
    },
    deliverAddress: {
        type: String,
    },
    paymentInfo: {
        paymentStatus: {
            type: String
        },
        type: {
            type: String
        }
    },
    orderStatus: {
        type: String,
        default: "Processing"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    deliveredAt: {
        type: Date
    }
});

module.exports = mongoose.model("Order", orderSchema);
