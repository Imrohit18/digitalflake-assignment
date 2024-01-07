import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    packSize: String,
    category: String,
    mrp: String,
    image: String,
    status: String,

})

let product = mongoose.model('products', productSchema)

export default product;