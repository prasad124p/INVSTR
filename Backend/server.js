const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb=require("./config/connectionDb");
const cors = require("cors");
const authRouter= require("./routes/authRouter")


const PORT = process.env.PORT || 3000;
connectDb();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use("/", require("./routes/about"));

app.use("/auth", authRouter);   // 👈 this mounts all routes under /auth

app.use("/startups", require("./routes/startups"));

app.use("/investors", require("./routes/investors"));

app.use("/admin", require("./routes/admin"));

app.use("/login", require("./routes/authRouter"))

app.listen(PORT, (err) => {
  console.log(`app is listening port ${PORT}`);
});
