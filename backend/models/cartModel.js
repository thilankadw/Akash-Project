const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  productName: {
    type: String,
    required: [true, "Product name is required"],
  },
  productPrice: {
    type: Number,
    required: [true, "Price is required"]
  },
  quantity: {
    type: String,
    required: true,
  },
  cartImage: {
    type: String,
  }
});

module.exports = mongoose.model('Cart', cartSchema);
