const express = require('express');
const router = express.Router();

// POST /api/checkout
router.post('/', (req, res) => {
  const { cartItems } = req.body;
  
  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const receipt = {
    total: total.toFixed(2),
    timestamp: new Date().toISOString(),
    orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
    items: cartItems,
    message: 'Order placed successfully! This is a mock checkout.'
  };
  
  res.json(receipt);
});

module.exports = router;