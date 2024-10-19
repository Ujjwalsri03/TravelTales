require('dotenv').config();
const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const app = express();

// Ensure you are using the correct environment variable casing
const port = process.env.PORT || 4000; // Default to 4000 if PORT is not defined

app.use(express.json());

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend origin
  credentials: true // Allow credentials if needed
}));

// Controllers
let userController = require("./controllers/user.controller");
let checkoutController = require("./controllers/checkout.controller");
let orderController = require("./controllers/order.controller");
let paymentController = require("./controllers/payment.controller");
let successController = require("./controllers/success.controller");

// Routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/users", userController);
app.use("/checkout", checkoutController);
app.use("/order", orderController);
app.use("/razorpay", paymentController);
app.use("/success", successController);

// Start the server
const start = async () => {
  await connect(); // Connect to MongoDB
  app.listen(port, () => console.log(`Server running on port ${port}!`));
};

module.exports = start;
