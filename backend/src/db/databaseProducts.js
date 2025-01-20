import mongoose from "mongoose";


const url=process.env.MONGO_URI

mongoose.connect(url).then(()=>{
    console.log("conncet to mongo db")
}).catch(()=>{
    console.log("error to connect mongo db")
})