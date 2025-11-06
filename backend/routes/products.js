const express = require('express');
const router = express.Router();

// Mock products data
const products = [
  { _id: '1', name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/150' },
  { _id: '2', name: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/150' },
  { _id: '3', name: 'Laptop Backpack', price: 49.99, image: 'https://via.placeholder.com/150' },
  { _id: '4', name: 'Bluetooth Speaker', price: 79.99, image: 'https://via.placeholder.com/150' },
  { _id: '5', name: 'Phone Case', price: 19.99, image: 'https://via.placeholder.com/150' },
  { _id: '6', name: 'USB-C Cable', price: 15.99, image: 'https://via.placeholder.com/150' }
];

// GET /api/products
router.get('/', (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;