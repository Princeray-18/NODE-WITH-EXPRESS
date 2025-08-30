const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db.config");
const app = express();
const userRouter = require("./routes/user.routes");
const bikeRouter = require("./routes/Bike.routes");
const bookRouter = require("./routes/Book.routes");
const laptopRouter = require("./routes/Laptop.routes");
dotenv.config(); // Load environment variables from .env file

app.use(express.json()); // Middleware to parse JSON request bodies
app.use("/api/v1/user", userRouter);
app.use("/api/v1/bike", bikeRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/laptop", laptopRouter);
async function startServer() {
  try {
    await connectDB(); // Ensure the database connection is established

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
  }
}

startServer(); // Start the server after connecting to the database