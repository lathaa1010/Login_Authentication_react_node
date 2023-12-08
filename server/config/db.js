const mongoose = require("mongoose");

const connectDB = async () => {
    console.log(process.env.MONGODB_URL); // Corrected variable name
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL, { // Corrected variable name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
