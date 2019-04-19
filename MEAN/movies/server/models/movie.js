const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Movies title is required'], minlength: [3, 'Title must be atleast 3 characters long!']},
    comment: {required: true, type: [
        {
            name: {type: String, required: [true, 'Name is required'], minlength: [3, 'Name must be atleast 3 characters long!']},
            rating: {type: Number, required: [true, 'Rating is required'], min: [1, 'Movie must be rated'], max: [5, 'Rate movie between 1 - 5']},
            review: {type: String, required: [true, 'Review is required'], minlength: [3, 'Review must be atleast 3 characters long!']},
        }
    ]},
    average_rating: {type: Number, default: 0}

}, {timestamps: true});

mongoose.model('Movie', MovieSchema);