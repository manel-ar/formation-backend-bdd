const mongoose=require("mongoose");
const joi=require("joi");

const authorSchema=new mongoose.Schema({
    firstname:{type:String ,required : true, trim :true, minlength:3,maxlength:200},
    lastname:{type:String ,required : true, trim :true, minlength:3,maxlength:200},
    nationality:{type:String ,required : true, trim :true, minlength:2,maxlength:100},
    
},{timestamps:true});

const Author=mongoose.model("Author", authorSchema);


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


module.exports={Author,validateCreateAuthor,validateUpdateAuthor};


