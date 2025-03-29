const joi=require("joi");



function validateCreateAuthor(obj) {
    const schema=joi.object({
        firstname:joi.string().min(3).max(200).required(),
        lastname:joi.string().min(3).max(200).required(),
        nationality:joi.string().min(3).max(100).required()
    })
    return schema.validate(obj);
}

function validateUpdateAuthor(obj){
    const schema=joi.object({
        firstname:joi.string().min(3).max(200),
        lastname:joi.string().min(3).max(200),
        nationality:joi.string().min(3).max(100)
    })
    return schema.validate(obj);
}
module.exports={validateCreateAuthor,validateUpdateAuthor};
