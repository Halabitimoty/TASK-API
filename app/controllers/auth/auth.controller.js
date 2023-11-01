const login = require("./login.controller");
const profile = require("./profile.controller");
const register = require("./register.controller");
const forgetpassword = require("./forgetpassword");
const resetpassword = require("./resetpassword");

module.exports = { login, profile, register, forgetpassword, resetpassword };
