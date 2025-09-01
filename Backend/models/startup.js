    const mongoose=require("mongoose");

   const startupSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    // InvestorName: { 
    //     type: String,
    //     required: true
    // },
    // FundingRoundSize: { 
    //     type: Number, 
    //     required: true
    // },
    // RaisedTillDate:{
    //     type:Number,
    //     required:true
    // },
    role: {
        type: String,
        enum: ["startup", "investor", "admin"], 
        default: "startup",                     
    },
},{timestamps:true});

module.exports=mongoose.model("startup",startupSchema)
