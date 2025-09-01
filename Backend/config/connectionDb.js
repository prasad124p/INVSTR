const mongoose = require("mongoose");


const connectDb = async()=>{
   mongoose.connect(process.env.MONGO_URI)
   .then(()=>console.log("database is conected"))
   .catch(err => console.error(err));
}   
     
module.exports=connectDb; 