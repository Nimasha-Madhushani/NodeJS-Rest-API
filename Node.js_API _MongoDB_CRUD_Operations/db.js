const mongoose=require('mongoose')

const dotenv=require('dotenv');

dotenv.config()
//require('dotenv').config()

const URL=process.env.Mongodb_URL

 module.exports=()=>{
    return mongoose.connect(URL)
 }