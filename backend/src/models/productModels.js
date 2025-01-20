import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    descrioption: {
        type: String,
        require: false
    },
    category: {
        type: String,
        require: false
    },
})

const product = new mongoose.model("product", productSchema) || mongoose.models.product
export default product