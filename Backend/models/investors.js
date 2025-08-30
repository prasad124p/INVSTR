const mongoose=require("mongoose");

const investorSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    FieldOfExpertise:{
        type:String,
        required:true
    },
    InvestorType:{
        type:String,
        required:true,
        enum: ["Angel Investor", "Venture Capital Firm", "Private Equity", "Corporate Investor", "Other"],
    },
    Organization:{
        type:String,
        default:null,
    },
    TotalInvestmentTillDate:{
        type:Number,
        default:0
    }
},{timestamps:true});

module.exports=mongoose.model("investor",investorSchema)