const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    index: (req, res) =>{
        console.log("index route");
        Author.find({}, (err, authors) =>{
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.json({status: true, authors: authors})
            }
        })
    },
    create: (req, res) =>{
        console.log("create route");
        const author = new Author(req.body);
        author.save((err) => {
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.json({status: true});
            }
        })
    },
    update: (req, res) => {
        console.log("edit route");
        var opts = { runValidators: true };
        Author.updateOne({_id: req.params.id}, req.body, opts, (err, author) => {
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status: true});
            }
        })
    },
    show: (req, res) => {
        Author.findOne({_id:req.params.id}, (err, author)=>{
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status:true, author: author})
            }
        })
    },
    destroy: (req, res) => {
        Author.deleteOne({_id:req.params.id}, (err, author) => {
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status:true, author: author})
            }
        })
    }
}