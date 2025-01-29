const express = require("express")
const app = express()
require("dotenv").config()
require("./src/db/dbConnection")
const port = process.env.PORT || 5001
const router = require("./src/routers")
const cors = require("cors");

//Middelwares
app.use(express.json())
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}))
// CORS Middleware
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use("/api", router)


app.get("/", (req, res) => {
    res.json({
     message: "Bienvenue"
    })
})






app.listen(port, () => {
    console.log(`Le server fonctionne sur le port ${port}`);
    
})
