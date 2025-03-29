const notFound =(req,res,next)=>{
    const error= new Error(`not found-${req.originalUrl}`)
    res.status(404);
    next(error);

    // pour dire si on a trompe dans l'url (dans postman) 
// puis  next(error); va envoyer lerreur au 2em middlware pour la traiter 
}
const errorHandler=(err,req,res,next)=>{
    const statusCode= res.statusCode===200? 500: res.statusCode;
res.status(statusCode.json({message:err.message}))
}
module.exports={notFound,errorHandler};
