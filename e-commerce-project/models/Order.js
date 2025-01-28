// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  products: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  }],
  deliveryType: { type: String, enum: ['instant', 'standard'] },
  customerDetails: {
    name: String,
    phone: String,
    address: String
  },
  paymentMethod: { type: String, enum: ['COD', 'UPI'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);