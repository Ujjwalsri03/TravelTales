const mongoose = require("mongoose");
require("dotenv").config();

// Set the strictQuery option
mongoose.set('strictQuery', true); // or false, depending on your needs

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connect;
