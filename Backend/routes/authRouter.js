const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/authcontroller");
const {signupValidation, loginValidation}=require("../middleware/AuthValidation")

//routes

router.post("/signup", signupValidation, authcontroller.signup);

router.post("/login", loginValidation, authcontroller.login);

module.exports=router;
