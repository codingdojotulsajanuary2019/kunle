const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    index: (req, res) => {
        User.find({}, (err, users)=>{
            if(err){
                res.json({message: false, error: err});
            } else {
                res.json({message: true, users: users})
            }
        })
    },
    create: (req, res)=>{
        console.log(req.method);
        console.log(req.params.name);
        let newUser;
        if(req.method == 'POST'){
            newUser = req.body;
        } else {
            newUser = {name: req.params.name}
        }
        const user = new User(newUser);
        user.save((err)=>{
            if(err){
                res.json({message: false, error: err});
            } else {
                res.redirect('/');
            }
        })
    },
    destroy: (req, res)=>{
        const name = req.params.name;
        User.findOneAndDelete({name: name}, (err, user)=>{
            if(err){
                res.json({message: false, error: err});
            } else {
                res.redirect('/');
            }
        })
    },
    show: (req, res)=>{
        const name = req.params.name;
        User.findOne({name: name}, (err, user)=>{
            if(err){
                res.json({message: false, error: err});
            } else {
                res.json({message: true, user: user})
            }
        })
    }
}