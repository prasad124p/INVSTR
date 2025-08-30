const investorModel =require("../models/investors");
const startup = require("../models/startup");
const startupModel =require("../models/startup");

//to get list of startups
exports.getStartups =async (req,res) => {
    const startups =await startupModel.find();
    res.json({message:"List of all startups", startups})
};

//to get startup by id
exports.getStartupsById=(req,res)=>{
    const startupData=startup.findById(req.params.id);
    res.json({message:`Details of startup ${startupData.name}`,data:startupData});
};

//to add investment
exports.addInvestment= async(req,res)=>{
    try{
        const {name, FieldOfExpertise,InvestorType}=req.body;
    if(!name || !FieldOfExpertise ||!InvestorType){
        return res.status(400).json({message:"fill the important details"})
    }
    const newFunding=await investorModel.create({
        name, FieldOfExpertise,InvestorType
    });

    return res.status(201).json({message:" New investment added", data:newFunding});
    }catch(error){
        console.log(error);
        res.send(500).json({message:"server error",error:error.message});
    }
};

//put Edit investment
exports.updateInvestment=async(req,res)=>{
    const roundId=req.params.id;
    const updateData=req.body;;
    res.json({message:`Funding round ${roundId} updated`, data:updateData})
};

//delete investment offer

exports.closeInvestment=(req,res)=>{
    const roundId=Request.params.id;
    res.json({message:`Investement for ${roundId} has been closed`})
};

