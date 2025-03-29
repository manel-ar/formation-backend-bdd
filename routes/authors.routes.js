
const express = require("express");

const router = express.Router();
const {createAuthor,updateAuthor,getAllAuthors,getAuthor,deleteAuthor} = require("../controllers/author.controller.js")

//pour renvoyer des données(ajouter un auteur)

router.post("/", createAuthor);
// modifier un auteur
router.put("/:id",updateAuthor );
// retourner la liste des utilisateurs 
router.get("/",getAllAuthors);
// recuperer un auteur par son id
router.get("/:id",getAuthor);
// supprimer un auteur (par son id)
router.delete("/:id",deleteAuthor);
module.exports = router;


