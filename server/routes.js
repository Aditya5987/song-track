const AuthController = require('./controller/AuthController')
const AuthControllerPolices = require('../server/policies/AuthControllerPolicy')
module.exports =(app)=> {
    app.post('/register', AuthControllerPolices.register, AuthController.register)
}