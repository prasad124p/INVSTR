    const mongoose=require("mongoose");

   const startupSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    InvestorName: { 
        type: String,
        required: true
    },
    FundingRoundSize: { 
        type: Number, 
        required: true
    },
    RaisedTillDate:{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("startup",startupSchema)
