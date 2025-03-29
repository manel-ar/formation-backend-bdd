const express = require('express');
const  {createBook, getAllBooks, getBook} = require('../controllers/book.controller.js');

const router = express.Router();
router.post("/", createBook);
// retourner la liste des livres 
router.get("/",getAllBooks);
// recuperer un livre par son id
router.get("/:id",getBook);
module.exports = router;