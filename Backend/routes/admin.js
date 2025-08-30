const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admincontroller");

// STARTUPS 
router.get("/startups", adminController.getStartups);
router.get("/startups/:id", adminController.getStartupById);
router.post("/startups", adminController.addStartup);
router.put("/startups/:id", adminController.updateStartup);
router.delete("/startups/:id", adminController.removeStartup);

// INVESTORS 
router.get("/investors", adminController.getInvestors);
router.get("/investors/:id", adminController.getInvestorById);
router.post("/investors", adminController.addInvestor);
router.put("/investors/:id", adminController.updateInvestor);
router.delete("/investors/:id", adminController.removeInvestor);

//Admin task
router.get("/stats", adminController.getStats);


module.exports = router;