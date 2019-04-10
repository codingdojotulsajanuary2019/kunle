var Quote = require('../models/quote');

module.exports = {
    index: function(req, res) {
        res.render("index");
    },

    create: function(req, res) {
        console.log("POST DATA", req.body);
        var quote = new Quote(req.body);

        quote.save(function(err) {
            if(err) {
                console.log("something went wrong", err);
                for(var key in err.errors) {
                    console.log(err.errors[key].message);
                    req.flash('invalid', err.errors[key].message);
                }
                res.render("index");
            }
            else 
            {
                console.log("successfully added a quote!");
                res.redirect("/quotes");
            }
        })
    },

    viewQuotes: function(req, res) {
        var mysort = {createdAt: -1};
        Quote.find({}, function(err, quotes) {
            if(err){
                console.log("Oops!! Try again");
            }else {
                console.log(quotes);
                res.render("quote", {allquotes: quotes});
            }   
        }).sort(mysort);
    }
};