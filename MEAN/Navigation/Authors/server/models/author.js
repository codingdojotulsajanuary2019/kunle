const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Authors name is required'], minlength: [3, 'Name must be 3 characters long!']}
}, {timestamps: true});

mongoose.model('Author', AuthorSchema);