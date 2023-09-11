//use change all occurances of product. Add or remove functions as needed
const Product = require('../models/product.model');



// get all

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({products: allProducts})
        })
        .catch(err =>res.json(err));
}

// get one

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then((oneProduct) => {
            res.json({product: oneProduct})
        })
        .catch(err =>res.json(err));
}

// create

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({product: newProduct})
        })
        .catch(err =>res.json(err));
}

//update 

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedProduct) => {
            res.json({product: updatedProduct})
        })
        .catch(err =>res.json(err));
}


// delete one

module.exports.deleteOneProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((deletedProduct) => {
            res.json({product: deletedProduct})
        })
        .catch(err =>res.json(err));
}