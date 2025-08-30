const express =require("express");
const router =express.Router();
const investorController= require("../controllers/investorcontroller")

//Routes

router.get("/",investorController.getStartups);
router.get("/:id",investorController.getStartupsById);
router.post("/",investorController.addInvestment);
router.put("/:id", investorController.updateInvestment);
router.delete("/:id",investorController.closeInvestment);

module.exports=router;