import React, { useState, useEffect } from 'react';
import './App.css';
import { getProducts, getCart, addToCart, removeFromCart, checkout } from './services/api';
import BackgroundParticles from './components/BackgroundParticles'; // Add this import

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '' });

  // Load products and cart on component mount
  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  const loadProducts = async () => {
    try {
      const productsData = await getProducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Failed to load products:', error);
      // Fallback to mock data if backend fails
      const mockProducts = [
        { _id: '1', name: 'Wireless Headphones', price: 99.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHotmZZHjjngdu8Jajykez7au4rE8qshKSyg55t-qN-LQ2kVC3IWcn3JeS-yPV9Px1z13PdJfsu3_DbF6-jlfOVSPRZ2e6btgunH1-McCGVdPV577vdDXN' },
        { _id: '2', name: 'Smart Watch', price: 199.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQepZj8GoGjBHbroRaUNJqGPUKK6ST62GHYpa3T3HD-4wPtwTLC-gnPjmaWgYIq-2NjiF5h5nZ80eVRKY9pUvh5NhnqDQvS_eHTdeR9QtwSejctD_i-wNMy' },
        { _id: '3', name: 'Laptop Backpack', price: 49.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIG83yCsossNMg5kdfke2IXm34ufuwI_mEx5lD-4lPj4Q1XZaJuVIlbIUM_lg0Upx37Lix5oxO9ZL2kdl2_5wKFWhVBOPof_IzzbWK76B_gmQ2nMJpdDPOyA' },
        { _id: '4', name: 'Bluetooth Speaker', price: 79.99, image: 'https://m.media-amazon.com/images/I/61C1YkP5lzL.jpg' },
        { _id: '5', name: 'Phone Case', price: 19.99, image: 'https://via.placeholder.com/150' }
      ];
      setProducts(mockProducts);
    }
  };

  const loadCart = async () => {
    try {
      const cartData = await getCart();
      setCart(cartData);
    } catch (error) {
      console.error('Failed to load cart:', error);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId, 1);
      await loadCart(); // Refresh cart
    } catch (error) {
      console.error('Failed to add to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await removeFromCart(productId);
      await loadCart(); // Refresh cart
    } catch (error) {
      console.error('Failed to remove from cart:', error);
      alert('Failed to remove item from cart. Please try again.');
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const receiptData = await checkout(cart.items);
      setReceipt(receiptData);
      setShowCheckout(false);
      // Clear cart after successful checkout
      setCart({ items: [], total: 0 });
      setCustomerInfo({ name: '', email: '' });
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className="App">
      <BackgroundParticles /> {/* Add this line */}
      
      <header className="App-header">
        <h1>Mock E-Commerce Cart</h1>
        <p>🛒 Cart: {cart.items.length} items | Total: ${cart.total.toFixed(2)}</p>
        {cart.items.length > 0 && (
          <button 
            onClick={() => setShowCheckout(true)}
            style={{
              background: '#ff5900',
              color: 'white',
              border: 'none',
              padding: '10px 20px ',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Proceed to Checkout
          </button>
        )}
      </header>

      {/* Products Section */}
      <section>
        <h2>Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button 
                onClick={() => handleAddToCart(product._id)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section className="cart-view">
        <h2>Shopping Cart</h2>
        {cart.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.items.map(item => (
              <div key={item.productId} className="cart-item">
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button 
                  onClick={() => handleRemoveFromCart(item.productId)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
            <div style={{ marginTop: '20px', padding: '10px', borderTop: '2px solid #333' }}>
              <h3>Total: ${cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </section>

      {/* Checkout Form Modal */}
      {showCheckout && (
        <div className="modal-overlay">
          <div className="checkout-form">
            <h2>Checkout</h2>
            <form onSubmit={handleCheckout}>
              <input
                type="text"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                required
              />
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button type="submit" style={{ flex: 1 }}>
                  Complete Purchase
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowCheckout(false)}
                  style={{ 
                    flex: 1, 
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {receipt && (
        <div className="modal-overlay">
          <div className="receipt-modal">
            <h3>🎉 Order Confirmed!</h3>
            <p><strong>Order ID:</strong> {receipt.orderId}</p>
            <p><strong>Total:</strong> ${receipt.total}</p>
            <p><strong>Date:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>
            <p><strong>Items:</strong></p>
            <ul style={{ textAlign: 'left', margin: '10px 0' }}>
              {receipt.items.map((item, index) => (
                <li key={index}>{item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}</li>
              ))}
            </ul>
            <p style={{ color: '#28a745', fontWeight: 'bold' }}>{receipt.message}</p>
            <button 
              onClick={() => setReceipt(null)}
              style={{
                background: '#ff5900',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '15px'
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;