import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String

})

let users = mongoose.model('users', userSchema)

export default users;