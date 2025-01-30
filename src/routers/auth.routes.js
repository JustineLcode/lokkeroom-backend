const router = require("express").Router()
const { login, register } = require("../controllers/auth.controller")
const authValidation = require("../middelwares/validations/auth.validation")

router.post("/login", authValidation.login, login)

router.post("/register", register, authValidation.register, register)


module.exports = router