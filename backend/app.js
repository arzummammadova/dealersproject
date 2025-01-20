import express from 'express'
import 'dotenv/config'
import  './src/db/databaseProducts.js'
import cors from 'cors'
import router from './src/router/productRouter.js'

const app=express()

app.use(cors())
app.use(express.json())
app.use("/api/products",router)




const port=process.env.PORT || 5001


app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`server is runnnig on ${port}`)
})