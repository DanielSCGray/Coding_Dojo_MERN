const mongoose = require('mongoose');

//change all occurance from subject name

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must be at least 2 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [.01, 'Price must be at least one cent']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [4, 'Description must be at least 4 characters']
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
