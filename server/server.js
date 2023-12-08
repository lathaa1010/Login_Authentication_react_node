const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

// Connect to the database before importing routes
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Import apiRouter after initializing the database
const apiRouter = require("../server/routes/index");


app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("It is working");
});

app.listen(5000, () => {
  console.log("Server is up and running on port 5000");
});
