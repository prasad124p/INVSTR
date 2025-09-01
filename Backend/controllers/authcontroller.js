const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminModel = require("../models/admin");
const StartupsModel = require("../models/startup");
const InvestorModel = require("../models/investors");

// Signup Controller
const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const roleLower = role.toLowerCase(); // normalize role

    // Check if user exists
    let existingUser;
    if (roleLower === "admin") existingUser = await AdminModel.findOne({ email });
    else if (roleLower === "startup") existingUser = await StartupsModel.findOne({ email });
    else if (roleLower === "investor") existingUser = await InvestorModel.findOne({ email });
    else return res.status(400).json({ message: "Invalid role", success: false });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists", success: false });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    let newUser;
    if (roleLower === "admin") newUser = new AdminModel({ name, email, password: hashedPassword, role: roleLower });
    else if (roleLower === "startup") newUser = new StartupsModel({ name, email, password: hashedPassword, role: roleLower });
    else if (roleLower === "investor") newUser = new InvestorModel({ name, email, password: hashedPassword, role: roleLower });

    await newUser.save();
    res.status(201).json({ message: "Signup successful", success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const roleLower = role.toLowerCase();
    let user;
    if (roleLower === "admin") user = await AdminModel.findOne({ email });
    else if (roleLower === "startup") user = await StartupsModel.findOne({ email });
    else if (roleLower === "investor") user = await InvestorModel.findOne({ email });
    else return res.status(400).json({ message: "Invalid role", success: false });

    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password", success: false });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "7d" }
    );

    res.status(200).json({ message: "Login successful", token, success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = { signup, login };
