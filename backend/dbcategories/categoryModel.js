import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: String,
    description: String,
    status: String,
})

let category = mongoose.model('categories', categorySchema)

export default category;