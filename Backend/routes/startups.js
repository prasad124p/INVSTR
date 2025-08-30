const express = require("express");
const router = express.Router();
const startupController = require("../controllers/startupcontroller");


// Routes
router.get("/", startupController.getInvestors);
router.get("/:id", startupController.getInvestorById);
router.post("/", startupController.addFundingRound);
router.put("/:id", startupController.updateFundingRound);
router.delete("/:id", startupController.closeFundingRound);

module.exports = router;
