const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/recipes", require("./routes/recipes"));
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
