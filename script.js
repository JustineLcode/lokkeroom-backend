const mongoose = require("mongoose")
const messages = require("./messages")
const uri = "mongodb+srv://<db_username>:<db_password>@nodetest.ogamw.mongodb.net/?retryWrites=true&w=majority&appName=NodeTest"



async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
        await run(); // Call run() only after connection is established
    } catch (err) {
        console.error("Database connection error:", err.message);
    }
}

run()
async function run (){
    try{
    const newMessage = await messages.create({
        message: "Hello",
        email: "test@test.com",
    })
    console.log(newMessage)
} catch (e) {
    console.error("Error:", e.message);
}
}

connectDB();