const Startup = require("../models/startup");
const Investor = require("../models/investors");

// STARTUPS
exports.getStartups = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json(startups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStartupById = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    if (!startup) return res.status(404).json({ message: "Startup not found" });
    res.status(200).json(startup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addStartup = async (req, res) => {
  try {
    const startup = new Startup(req.body);
    await startup.save();
    res.status(201).json({ message: "Startup added successfully", startup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateStartup = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!startup) return res.status(404).json({ message: "Startup not found" });
    res.status(200).json({ message: "Startup updated successfully", startup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removeStartup = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndDelete(req.params.id);
    if (!startup) return res.status(404).json({ message: "Startup not found" });
    res.status(200).json({ message: "Startup removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// INVESTORS
exports.getInvestors = async (req, res) => {
  try {
    const investors = await Investor.find();
    res.status(200).json(investors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInvestorById = async (req, res) => {
  try {
    const investor = await Investor.findById(req.params.id);
    if (!investor) return res.status(404).json({ message: "Investor not found" });
    res.status(200).json(investor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addInvestor = async (req, res) => {
  try {
    const investor = new Investor(req.body);
    await investor.save();
    res.status(201).json({ message: "Investor added successfully", investor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateInvestor = async (req, res) => {
  try {
    const investor = await Investor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!investor) return res.status(404).json({ message: "Investor not found" });
    res.status(200).json({ message: "Investor updated successfully", investor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removeInvestor = async (req, res) => {
  try {
    const investor = await Investor.findByIdAndDelete(req.params.id);
    if (!investor) return res.status(404).json({ message: "Investor not found" });
    res.status(200).json({ message: "Investor removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// STATS (active startups, investors)
exports.getStats = async (req, res) => {
  try {
    const startupCount = await Startup.countDocuments();
    const investorCount = await Investor.countDocuments();

    res.status(200).json({
      startups: startupCount,
      investors: investorCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
