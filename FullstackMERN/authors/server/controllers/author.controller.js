
const Author = require('../models/author.model');



// get all

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch(err =>res.json(err));
}

// get one

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then((oneAuthor) => {
            res.json(oneAuthor)
        })
        .catch(err =>res.json(err));
}

// create

module.exports.createAuthor = (req, res) => {
    Author.create(req.body, )
        .then(newAuthor => {
            res.json(newAuthor)
        })
        .catch(err =>res.status(400).json(err));
}

//update 

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedAuthor) => {
            res.json(updatedAuthor)
        })
        .catch(err =>res.status(400).json(err));
}


// delete one

module.exports.deleteOneAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then((deletedAuthor) => {
            res.json(deletedAuthor)
        })
        .catch(err =>res.json(err));
}