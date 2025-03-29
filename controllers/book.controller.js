const { Book } = require('../models/book.model.js');
const asyncHandler = require("express-async-handler");
const { validateCreateBook } = require('../validations/book.validation.js');

const getBook = asyncHandler(
    async (req, res) => {
        const book = await Book.findById(req.params.id).populate("author");

        if (!book)
            return res.status(404).json({ message: "Book not found" });

        res.status(201).json(book);
    }
)

const createBook = asyncHandler(
    async (req, res) => {
        const { error } = validateCreateBook(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);
        {
            const book = new Book({
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                price: req.body.price,
                cover: req.body.cover
            });

            const result = await book.save();
            res.status(201).json(result);
        }
    }
);
// afficher les livres ayant le meme auteur 
const getAllBooks = asyncHandler(
    async (req, res) => {
        const books = await Book.find().populate("author", ["_id", "firstName", "lastName"]);
        res.status(201).json(books);
    }
)

module.exports = { createBook, getAllBooks, getBook };