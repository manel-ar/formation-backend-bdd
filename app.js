
const express=require("express");
const mongoose=require("mongoose");
const authorPath=require("./routes/authors.routes.js");


const app=express();


app.use(express.json());

const PORT=8100;

//connexion a mongoDB

mongoose.connect("mongodb+srv://manel-arar:manel2000@cluster0.e6w0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("connected successfully to the DataBase ")).
catch((error)=>(console.error("Could not connect to the Mongo Database")));


app.use("/api/authors",authorPath);


// ecouter sur le port 8100
app.listen(PORT,()=>{
    console.log(`server is runing on port http://localhost:${PORT}`);
});
