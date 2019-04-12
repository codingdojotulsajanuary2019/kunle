const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required!'], minlength: [2, 'Name must be 2 characters long!']}
}, {timestamps: true});

mongoose.model('User', UserSchema);