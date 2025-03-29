const { Author } = require('../models/Author.model');
const asyncHandler = require("express-async-handler");
const {validateCreateAuthor, validateUpdateAuthor}=require('../validations/author.validation.js');

const createAuthor = asyncHandler(async (req, res) => {

    const { error } = validateCreateAuthor(req.body);
    // body : envoi des données saisies par un utilisateur
    // params : utilisé pour recherches critère à mettre dans params de postman
    // headers : type de contenu (xml , html , ...) et jetons 

    if (error) return res.status(400).send(error.details[0].message);
    // details[0].message utilisé pour afficher une erreur , 1 message pour chaque erreur 
    // obligation : pour lancer serveur ; dev () et start ()

    {
        const author = new Author({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nationality: req.body.nationality,
        });

        const result = await author.save();
        res.status(201).json(result);
    }

});

const updateAuthor = asyncHandler(async (req, res) => {

    const { error } = validateUpdateAuthor(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const author = await Author.findByIdAndUpdate(req.params.id, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nationality: req.body.nationality,
        }
    }, { new: true });

    res.status(201).json(author);

});

const getAllAuthors = asyncHandler(async (req, res) => {
    {
        // const authors = await Author.find().select("firstName lastName");
        // const authors = await Author.find().sort({"firstName":1});
        // const authors = await Author.find().sort({"firstName":-1});
        // const authors = await Author.find().select("firstName lastName -_id");
        const authors = await Author.find().select("firstName lastName -_id").sort({
            "firstName":-1
        });

        res.status(201).json(authors);
    }
});

const getAuthor = asyncHandler(async (req, res) => {
    {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ message: "Author not found" });
        res.status(201).json(author);
    }
});

const deleteAuthor = asyncHandler(async (req, res) => {
    {
        const author = Author.findById(req.params.id);
        if (author) {
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Author deleted successfully" });
        } else {
            res.status(404).json("Author not found");
        }
    }
});

module.exports={createAuthor,updateAuthor,getAllAuthors,getAuthor,deleteAuthor};