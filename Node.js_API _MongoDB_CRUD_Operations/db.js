const mongoose=require('mongoose')

const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", false);

const URL = process.env.MONGO_URL

 module.exports=()=>{
    return mongoose.connect(URL)
 }



