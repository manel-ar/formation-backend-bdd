
const express=require("express");
const mongoose=require("mongoose");
const authorPath=require("./routes/authors.routes.js");
const booksPath = require('./routes/book.routes.js');
const {notFound,errorHandler}= require('./middlewares/errors.js')
const {connectToDB}=require('./Config/db.js')
const dotenv = require ('dotenv')
dotenv.config()
connectToDB()


const app=express();


app.use(express.json());

const PORT=process.env.PORT||8100;

//connexion a mongoDB



app.use("/api/authors",authorPath);
app.use('/api/books',booksPath);
// midd pour les erreurs 
app.use(notFound)
app.use(errorHandler)



// ecouter sur le port 8100
app.listen(PORT,()=>{
    console.log(`server is runing on port http://localhost:${PORT}`);
});
