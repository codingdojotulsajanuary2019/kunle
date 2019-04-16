const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: [true, 'Baker name is required!'], minlength: [3, 'Name must be 3 characters long!']},
    imageURL: {type: String, required: [true, 'Cake Image required!']},
    comment: [
        {
            comment: {
                type: String, 
                required: [true, "Comment is required"]
            }, 
            rating: {
                type: Number,
                required: [true, "Rate this cake"]
            }
        }
    ],
    average_rating: Number
}, {timestamps: true});

mongoose.model('Cake', CakeSchema);