const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
/*     name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
}, */
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique : true,
},
password : {
    type : String, 
    required: true, 
},

    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
})


module.exports = mongoose.model("User", userSchema, "users", { dbName: "Lokker_users" })
