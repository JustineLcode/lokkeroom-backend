const user = require("../models/user.model")
const bycrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");

const login = async (req, res) =>{
    console.log(req.body);
    
    return res.json(req.body)
}

const register = async (req, res) => {
    const { email } = req.body

    const userCheck = await user.findOne({email})

    if (userCheck) {
        throw new APIError("Cette adresse est déjà utilisée !", 401)

    }

    req.body.password = await bycrypt.hash(req.body.password, 10 )

    console.log("Hash code :", req.body.password);


    const userSave = new user(req.body)
    await userSave.save()
        .then((data) => {

            return new Response(data, "L'enregistrement pris en compte").created(res)
        })
        .catch((err) => {
            throw new APIError("L'utilisateur ne peut être pris en compte !", 400)
        })


}

module.exports = {
    login, 
    register
}