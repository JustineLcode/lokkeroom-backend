const mongoose = require("mongoose")

const msgSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
},
    message: 
    {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: Date,
})


module.exports = mongoose.model("Message", msgSchema, "messages", { dbName: "Lokker_messagerie" })