const joi = require("joi");

const signupValidation = (req,res,next)=>{
    const Schema =joi.object({
        name:joi.string().min(3).max(50).required(),
        email:joi.string().email().required(),
        password:joi.string().min(5).max(50).required(),
        role:joi.string().valid("Startup","Investor","Admin").required()
    });
    const {error} = Schema.validate(req.body);
    if(error){
        return res.status(400)
            .json({message:"Bad request",error})
    }
    next();
}

const loginValidation = (req,res,next)=>{
    const Schema =joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(5).max(50).required(),
        role:joi.string().valid("Startup","Investor","Admin").required()
    });
    const {error} = Schema.validate(req.body);
    if(error){
        return res.status(400)
            .json({message:"Bad request",error})
    }
    next();
}
module.exports = { signupValidation, loginValidation };
    