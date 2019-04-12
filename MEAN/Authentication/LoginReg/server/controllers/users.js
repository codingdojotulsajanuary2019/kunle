var User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    create: function(req, res) {
        var user = new User(req.body);
        console.log(user.password);
        hashed = bcrypt.hash('user.password', 10) 
        console.log(hashed);
        user.save(function(err) {
            if(err) {
                console.log("something went wrong", err);
                for(var key in err.errors) {
                    console.log(err.errors[key].message);
                    req.flash('invalid', err.errors[key].message);
                }
                res.redirect("/");
            }
            else 
            {
                console.log("successfully added a bingo!");
                res.redirect("/success");
            }
        })
    },

    findUser: function(req, res) {

    }

}

