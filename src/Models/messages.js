const mongoose = require("mongoose")

const msgSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
},
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    }
}, { timestamps: true });


module.exports = mongoose.model("Message", msgSchema, "messages")