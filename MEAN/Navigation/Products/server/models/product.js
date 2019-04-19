const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Products title is required'], minlength: [3, 'Title must be atleast 4 characters long!']},
    price: {type: Number, required: [true, 'Price is required'], min: [1, "Price must be greater than $1.00" ]},
    imageURL: {type: String}
}, {timestamps: true});

mongoose.model('Product', ProductSchema);