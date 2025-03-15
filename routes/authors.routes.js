const {Author, validateCreateAuthor,validateUpdateAuthor }=require("../models/author.model");

const express=require("express");

const router=express.Router();

//pour renvoyer des données

router.post("/",async (req,res)=>{
  try{
    const {error}=validateCreateAuthor(req.body);

    if(error)
        return res.status(400).send(error.details[0].message);

    const author=new Author({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        nationality:req.body.nationality
    });

    await author.save();

    res.status(201).json(author)
  


    }catch(error){

        res.status(500).json({message:'Une erreur a été détectée'});
    }

});

router.put("/:id",async (req,res)=>{
    
    const {error}=validateUpdateAuthor(req.body);
    
    if(error)
        return res.status(400).send(error.details[0].message);


    const author=await Author.findByIdAndUpdate(req.params.id,
        {
        $set: {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        nationality:req.body.nationality
    }
    },{new:true});

    res.status(201).send(author);


});


module.exports=router;


