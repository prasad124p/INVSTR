const AdminModel = require("../models/admin");
const StartupsModel = require("../models/startup");
const InvestorModel = require("../models/investors");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    let existingUser;

    if (role === "Admin") {
      existingUser = await AdminModel.findOne({ email });
    } else if (role === "Startup") {
      existingUser = await StartupsModel.findOne({ email });
    } else if (role === "Investor") {
      existingUser = await InvestorModel.findOne({ email });
    }

    if (existingUser) {
      return res.status(409).json({ message: "User already exists", success: false });
    }

    let newUser;

    if (role === "Admin") {
      newUser = new AdminModel({ name, email, password, role });
    } else if (role === "Startup") {
      newUser = new StartupsModel({ name, email, password, role });
    } else if (role === "Investor") {
      newUser = new InvestorModel({ name, email, password, role });
    }

    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();

    res.status(201).json({ message: "Signup successful", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  signup,
};
