var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    first_name: {type: String, required:[true, "Enter first name"], minlength: [2, "First name must be atleast 2 characters long"]},
    last_name: {type: String, required:[true, "Enter last name"], minlength: [2, "Last name must be atleast 2 characters long"]},
    email: {
        type: String,
        required: [true, "Enter a valid email"], 
        validate: {
            validator: function(email){
                var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;                 
                return emailRegex.test(email);
            }, 
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {type: String, required: [true, "Enter a password"], minlength: [8, "Password must be atleast 8 characters long"], validate: {
        validator: function(password){
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password);
        },
        message: "Password must contain at least 1 lowercase, 1 uppercase and 1 numeric character"
    }},
    birthday: {type: Date, required: [true, "Provide birth date"]}
}, {timestamps: true});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');