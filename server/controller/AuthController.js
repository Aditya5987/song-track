
const models = require( '../models/index');
module.exports = {
    async register (req,res) {
        try{
            console.log(req.body)
            const User = await models.users.create(req.body)
            res.send(User.toJSON())
        } catch(error){
            res.status(400).send({
                error : `This email account is alreasy in use.`
            })
        }
    },
    async login (req,res) {
        try{
            console.log(req.body)
            const User = await models.users.create(req.body)
            res.send(User.toJSON())
        } catch(error){
            res.status(400).send({
                error : `This email account is alreasy in use.`
            })
        }
    },
}