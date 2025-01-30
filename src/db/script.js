const mongoose = require("mongoose")
const Message = require("../Models/messages")
const User = require("../Models/users")
const bcrypt = require("bcryptjs");

const uri = "mongodb+srv://<db_username>:<db_password>@nodetest.ogamw.mongodb.net/?retryWrites=true&w=majority&appName=NodeTest";



async function connectDB() {
    try {
        await mongoose.connect(uri, { dbName: "Lokkeroom" });
        console.log("Connected to MongoDB");
        await run();
    } catch (err) {
        console.error("Database connection error:", err.message);
    }
}


async function run (){
    try{
        console.log("Connected to database");
        let existingUser = await User.findOne({ email: "user@test.com" });

        if (!existingUser) {
            console.log("User not found. Creating a new one...");
            existingUser = await User.create({
                email: "user@test.com",
                password: await bcrypt.hash("securepassword", 10),
            });
            console.log("User created:", existingUser);
        } else {
            console.log("User already exists:", existingUser);
        }

    const newMessage = await Message.create({
        message: "Hello",
        user: existingUser._id
    })
    console.log("Message created:", newMessage)
} catch (e) {
    console.error("Error:", e.message);
}
}

connectDB();