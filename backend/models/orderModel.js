const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      ref: "user",
    },
    items: [
      {
        _id: false,
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "product",
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    status: {
      type: String, //waiting, confirmed, deliver, success
      default: "pending",
    },
  },
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
