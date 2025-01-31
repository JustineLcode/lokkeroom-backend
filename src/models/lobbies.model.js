const mongoose = require("mongoose");

const lobbySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message" 
    }]
}, { timestamps: true }); 

module.exports = mongoose.model("Lobby", lobbySchema, "lobbies");
