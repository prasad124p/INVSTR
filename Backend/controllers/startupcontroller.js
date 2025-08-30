// GET all investors
const startupModel=require("../models/startup")
const investorModel = require("../models/investors");


//get list of all investors
exports.getInvestors = async (req, res) => {
    const investor=await investorModel.find();
    res.json({ message: "List of all investors" ,investors:investor});
};

// GET investor by ID
exports.getInvestorById = async (req, res) => {
    const investorId = req.params.id;
    const investor = await investorModel.findById(investorId);
    res.json({ message: `Details of investor ${investorId}` ,data:investor});
};

// POST new funding round
exports.addFundingRound = async (req, res) => {
    try{
        const {name,InvestorName,FundingRoundSize,RaisedTillDate} = req.body;
    if(!name || !InvestorName || !FundingRoundSize || !RaisedTillDate){
        return  res.status(400).json({message:"fill all the details" })
    }

    const newRound=await startupModel.create({
        name,InvestorName,FundingRoundSize,RaisedTillDate
    });

    return res.status(201).json({ message: "New funding round added", data: newRound});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"server error",error:error.message});
    }
};

// PUT update funding round
exports.updateFundingRound = (req, res) => {
    const roundId = req.params.id;
    const updatedData = req.body;
    res.json({ message: `Funding Round ${roundId} updated`, data: updatedData });
};

// DELETE close funding round
exports.closeFundingRound = (req, res) => {
    const roundId = req.params.id;
    res.json({ message: `Funding Round ${roundId} has been closed` });
};
