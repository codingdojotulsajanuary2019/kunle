var Bingo = require('../models/bingo');

module.exports = {
    index: function(req, res) {
        var mysort = {createdAt: -1};
        Bingo.find({}, function(err, bingos) {
            if(err){
                console.log("Oops!! Try again");
            }else {
                console.log(bingos);
                res.render("index", {allBingos: bingos});
            }   
        }).sort(mysort);
    },

    create: function(req, res) {
        console.log("POST DATA", req.body);
        var bingo = new Bingo(req.body);
    
        bingo.save(function(err) {
            if(err) {
                console.log("something went wrong", err);
                for(var key in err.errors) {
                    console.log(err.errors[key].message);
                    req.flash('invalid', err.errors[key].message);
                }
                res.redirect("/bingo/new");
            }
            else 
            {
                console.log("successfully added a bingo!");
                res.redirect("/");
            }
        })
    },

    editBingo: function(req, res) { 
        Bingo.findById(req.params.id, function(err, bingo) {
            if(err){
               res.redirect("/");
            }
            else{
                res.render("bingo", {thisBingo: bingo});
            }
        })
    },

    updateBingo: function(req, res) {
        var opts = { runValidators: true };
        Bingo.findByIdAndUpdate(req.params.id, { $set: {
            name: req.body.name,
            meals: req.body.meals,
            age: req.body.age
        }}, opts, function(err, bingo){
            if(err){
                 for(var key in err.errors) {
                    console.log(err.errors[key].message);
                    req.flash('invalid', err.errors[key].message);
                }
                res.redirect(`/bingo/edit/${req.params.id}`);
            }
            else{
                res.redirect("/");
            }
        })
    },

    showBingo: function(req, res) {
        Bingo.findById(req.params.id, function(err, bingo) {
            if(err){
                res,redirect("/");
            }
            else{
                res.render("aBingo", {thisBingo: bingo});
            }
        })
    },

    deleteBingo: function(req, res) {
        Bingo.findByIdAndRemove(req.params.id, function(err, bingo) {
            if(err){
                console.log(err);
                console.log("Cant delete");
            }
            res.redirect("/");
        })
    }
}