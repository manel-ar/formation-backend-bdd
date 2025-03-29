const mongoose=require("mongoose");
async function connectToDB(){
    try {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("connected successfully to the DataBase "))
    . catch((error)=>(console.error("Could not connect to the Mongo Database")));
} catch (error) {
    console.error("could not connect to mongodb",error)
    
}

}
module.exports={connectToDB}