const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectionDb");
const cors = require("cors");

// Routes
const authRouter = require("./routes/authRouter");
const aboutRouter = require("./routes/about");
const startupsRouter = require("./routes/startups");
const investorsRouter = require("./routes/investors");
const adminRouter = require("./routes/admin");

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount Routes
app.use("/", aboutRouter);
app.use("/auth", authRouter);       // Signup/Login
app.use("/startups", startupsRouter);
app.use("/investors", investorsRouter);
app.use("/admin", adminRouter);

// Removed duplicate "/login" route — login is already handled via /auth/login

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
