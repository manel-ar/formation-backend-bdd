const mongoose=require("mongoose");

const authorSchema=new mongoose.Schema({
    firstname:{type:String ,required : true, trim :true, minlength:3,maxlength:200},
    lastname:{type:String ,required : true, trim :true, minlength:3,maxlength:200},
    nationality:{type:String ,required : true, trim :true, minlength:2,maxlength:100},
    
},{timestamps:true});
// pour pouvoir instancier des objets auteur dans les autres fichiers 

const Author=mongoose.model("Author", authorSchema);




module.exports={Author};


