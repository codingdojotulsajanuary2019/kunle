const mongoose = require('mongoose');

var BingoSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [2, "Name must be atleast 2 character long"]},
    meals: {type: String, required: [true, "Favorite meal is required"], minlength: [2, "Meal must be atleast 2 character long"]},
    age: {type: Number, required: [true, "Age is required"], min: [1, "Age must be 1 or greater"], max: [100, "Age cannot be greater than 100"]}
}, {timestamps: true} );

mongoose.model('Bingo', BingoSchema);