Mock E-Commerce Cart 🛒
A full-stack shopping cart application built for the Vibe Commerce internship screening process. This project demonstrates a complete e-commerce flow with product listing, cart management, and checkout functionality.

🚀 Features
Backend APIs
GET /api/products - Fetch all products

POST /api/cart - Add items to cart

DELETE /api/cart/:id - Remove items from cart

GET /api/cart - Get cart contents with total

POST /api/checkout - Mock checkout with receipt generation

Frontend Features
📱 Responsive product grid with "Add to Cart" functionality

🛒 Shopping cart management (add/remove/update quantities)

💰 Real-time total calculation

📋 Checkout form with customer information

🧾 Order receipt generation

📱 Mobile-friendly design

🛠️ Tech Stack
Frontend: React, Axios, CSS3

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

API: RESTful APIs

📦 Installation & Setup
Prerequisites
Node.js (v14 or higher)

MongoDB (local installation or MongoDB Atlas)

npm or yarn

1. Clone the Repository
bash
git clone https://github.com/Krish0114/mock-ecom-cart.git
cd mock-ecom-cart
2. Backend Setup
bash
cd backend

# Install dependencies
npm install

# Create environment file
echo "MONGODB_URI=mongodb://localhost:27017/mock-ecom" > .env
echo "PORT=5000" >> .env

# Start the backend server
npm run dev
Backend will run on http://localhost:5000

3. Frontend Setup
bash
cd frontend

# Install dependencies
npm install

# Start the React application
npm start
Frontend will run on http://localhost:3000

🗂️ Project Structure
text
mock-ecom-cart/
├── backend/
│   ├── routes/
│   │   ├── products.js      # Product API routes
│   │   ├── cart.js          # Cart management routes
│   │   └── checkout.js      # Checkout processing
│   ├── server.js            # Main server file
│   ├── package.json
│   └── .env                 # Environment variables
├── frontend/
│   ├── src/
│   │   ├── services/
│   │   │   └── api.js       # API service functions
│   │   ├── App.js           # Main React component
│   │   ├── App.css          # Styling
│   │   └── index.js         # React entry point
│   ├── public/
│   └── package.json
└── README.md
🎯 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/cart	Add item to cart
DELETE	/api/cart/:id	Remove item from cart
GET	/api/cart	Get cart contents
POST	/api/checkout	Process checkout
📸 Application Flow
...Products Page: Browse available products with images and prices

...Add to Cart: Click "Add to Cart" to add products to shopping cart

...Cart Management: View cart items, quantities, and total price

...Checkout Process: Enter customer details and complete purchase

...Order Confirmation: Receive mock receipt with order details

🎨 Features Demonstrated
✅ Full CRUD Operations for cart management

✅ Real-time State Management with React hooks

✅ RESTful API Design with proper HTTP methods

✅ Database Integration with MongoDB

✅ Error Handling for API calls

✅ Responsive UI for all screen sizes

✅ Form Validation for checkout process

🚀 Bonus Features Implemented
✅ Database persistence with MongoDB

✅ Comprehensive error handling

✅ Responsive mobile-first design

✅ Clean and modern user interface

✅ Mock payment processing

✅ Order receipt generation

🐛 Troubleshooting
Common Issues
Backend not starting:

Ensure MongoDB is running locally

Check if port 5000 is available

Verify all environment variables are set

Frontend connection issues:

Ensure backend is running on port 5000

Check CORS configuration in backend

Verify API base URL in frontend services

Database connection errors:

Confirm MongoDB connection string

Check if MongoDB service is running

Verify database permissions

📝 Development Notes
...The application uses in-memory cart storage for demonstration

...MongoDB is used for product data persistence

...All sensitive data should be stored in environment variables

...The checkout process is mocked for demonstration purposes

🔮 Future Enhancements
...User authentication and profiles

...Product search and filtering

...Payment gateway integration

...Order history and tracking

...Product reviews and ratings

...Inventory management

...Admin dashboard

👨‍💻 Developer
krish kheriya
krishkheriya59@gmail.com

Submission for Vibe Commerce Internship Screening
Completed on: 07-11-2025


This project demonstrates full-stack development capabilities with modern web technologies.
