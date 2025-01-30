const jwt = require("jsonwebtoken");
const APIError = require("../utils/errors");
const user = require("../models/user.model");

const createToken = async (user, res) => {

    const payload = {
        sub : user._id, 
        name: user.name
    }

    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        algorithm : "HS512", 
        expiresIn : process.env.JWT_EXPIRES_IN
    })

    return res.status(201).json({
        succes: true, 
        token, 
        message: "Réussi"
    })
}





module.exports = {
    createToken 
}