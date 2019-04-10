var mongoose = require('mongoose');
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [2, "Name must be atleast 2 character long"]},
    quote: {type: String, required: [true, "Quote cannot be empty"], minlength: [10, "Quote must be atleast 10 character long"]}
}, {timestamps: true} );

mongoose.model('Quote', QuoteSchema);

module.exports = mongoose.model("Quote");