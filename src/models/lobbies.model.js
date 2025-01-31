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
        ref: "User", // L'admin du lobby (doit être un utilisateur existant)
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Liste des utilisateurs appartenant au lobby
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message" // Messages échangés dans ce lobby
    }]
}, { timestamps: true }); // Gère createdAt et updatedAt automatiquement

module.exports = mongoose.model("Lobby", lobbySchema, "lobbies");
