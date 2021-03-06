const Joi = require('joi');

module.exports = {
    register (req,res, next){
        const schema = {
            email : Joi.string().email(),
            password : Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error, value } = Joi.validate(req.body,schema)

        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email adress'
                    })
                break;
                case 'password':
                    res.status(400).send({
                        error: `The password provide to failed to match the flowing rule
                        <br>
                        1 It must cantains flowing valid char lower case, <br>
                        2 It must be at least 8 character in length and not greater`
                    })
                    break;
                default:
                    res.status(400).send({
                        error: `Invalid registration information`
                    })
            }
        } else{
            next()
        }
    }
}