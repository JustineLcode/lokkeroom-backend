const mongoose = require("mongoose")

const userSchema = new mongoose.Schem({
    name : {
        type : String, 
        required: true, 
        trim: true
    }, 
    lastname : {
        type : String, 
        required: true, 
        trim: true
    }, 
    email : {
        type : String, 
        required: true, 
        trim: true, 
        unique : true
    }, 
    password : {
        type : String, 
        required: true, 
        trim: true
    }
}, {collection: "user", timestamps: true})

const user = mongoose.model("users", userSchema)

module.exports = user