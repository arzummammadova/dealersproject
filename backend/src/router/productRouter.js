import { createProduct, deleteProduct, getProducts } from "../controllers/productControllers.js"
import express from 'express'


const router=express.Router()



router.get("/",getProducts)

router.post("/",createProduct)

router.delete("/:id",deleteProduct)


export default router