const express = require('express');
const router = express.Router();

// In-memory cart (for demo purposes)
let cart = [];

// GET /api/cart
router.get('/', (req, res) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.json({ items: cart, total });
});

// POST /api/cart
router.post('/', (req, res) => {
  const { productId, qty } = req.body;
  
  // Mock product details (in real app, you'd fetch from database)
  const mockProducts = {
    '1': { name: 'Wireless Headphones', price: 99.99 },
    '2': { name: 'Smart Watch', price: 199.99 },
    '3': { name: 'Laptop Backpack', price: 49.99 },
    '4': { name: 'Bluetooth Speaker', price: 79.99 },
    '5': { name: 'Phone Case', price: 19.99 },
    '6': { name: 'USB-C Cable', price: 15.99 }
  };

  const product = mockProducts[productId];
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Check if item already in cart
  const existingItem = cart.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += parseInt(qty);
  } else {
    cart.push({
      productId,
      quantity: parseInt(qty),
      name: product.name,
      price: product.price
    });
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.json({ message: 'Item added to cart', items: cart, total });
});

// DELETE /api/cart/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  cart = cart.filter(item => item.productId !== id);
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.json({ message: 'Item removed from cart', items: cart, total });
});

module.exports = router;