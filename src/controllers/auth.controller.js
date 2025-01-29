const user = require("../models/user.model")
const bycrypt = require("bcrypt");
const APIError = require("../utils/errors");

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

    try {
        const userSave = new user(req.body)
        await userSave.save()
            .then((response) => {
                return res.status(201).json({
                    succes: true, 
                    data : response, 
                    message: "Inscris avec succès"
                })
            })
            .catch((err) => {
                console.log(err)
            })
    } catch (error) {
        console.log(error);
        
    }

}

module.exports = {
    login, 
    register
}