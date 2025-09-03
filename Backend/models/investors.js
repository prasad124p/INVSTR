    const { string } = require("joi");
    const mongoose=require("mongoose");

    const investorSchema=mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        FieldOfExpertise:{
            type:String,
            // required:true
        },
        email:{
            type:String,
            required: true
        },
            password: {
            type: String,
            required: true,
            minlength: 5
        },
        InvestorType:{
            type:String,
            // required:true,
            enum: ["Angel Investor", "Venture Capital Firm", "Private Equity", "Corporate Investor", "Other"],
        },
        // Organization:{
        //     type:String,
        //     default:null,
        // },
        role: {
            type: String,
            enum: ["investor"],
            default: "investor",
            },
        // TotalInvestmentTillDate:{
        //     type:Number,
        // //     default:0
        // }
    },{timestamps:true});

    module.exports=mongoose.model("investor",investorSchema)