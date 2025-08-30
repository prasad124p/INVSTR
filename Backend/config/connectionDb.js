const mongoose = require("mongoose");


const connectDb = async()=>{
   mongoose.connect(process.env.CONNECTION_STRING)
   .then(()=>console.log("database is conected"))
   .catch(err => console.error(err));
}   
     
module.exports=connectDb; 