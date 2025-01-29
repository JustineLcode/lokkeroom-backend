const mongoose = require("mongoose")
const message = require("./messages")
const user = require("./users")
const uri = "mongodb+srv://<db_username>:<db_password>@nodetest.ogamw.mongodb.net/?retryWrites=true&w=majority&appName=NodeTest"



async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
        await run();
    } catch (err) {
        console.error("Database connection error:", err.message);
    }
}


async function run (){
    try{
        console.log("Connected to databases");
            const newUser = await user.create({
                email: "user@test.com",
                password: "securepassword",
            });
        console.log("User created:", newUser);

    const newMessage = await message.create({
        message: "Hello",
        email: "test@test.com",
    })
    console.log("Message created:", newMessage)
} catch (e) {
    console.error("Error:", e.message);
}
}

connectDB();