const mongoose = require('mongoose');
const Bingo = mongoose.model('Bingo');

module.exports = {
    index: (req, res) =>{
        console.log("index route");
        var mysort = {name: 1};

        Bingo.find({}, (err, bingos) =>{
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.json({status: true, bingos: bingos})
            }
        }).sort(mysort);
    },
    create: (req, res) =>{
        console.log("create route");
        console.log(req.body);
        const bingo = new Bingo(req.body);
        bingo.save((err) => {
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.redirect('/');
            }
        })
    },
    show: (req, res) =>{
        
        console.log("show route");

        Bingo.findOne({name:req.params.name}, (err, bingo)=>{
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status:true, bingo: bingo})
            }
        })
    },
    update: (req, res) =>{
        console.log("update route");
        var opts = { runValidators: true };

        Bingo.findOneAndUpdate({_id: req.params.id}, {$set: {
            name: req.body.name,  
            meals: req.body.meals,  
            age: req.body.age  
        }},opts, (err)=> {
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.redirect('/');
            }
        })
    },
    destroy: (req, res) =>{
        console.log("destroy route");
        Bingo.deleteOne({_id: req.params.id}, (err, bingo)=>{
            if(err){
                res.json({status:false, error:err});
            }
            else{
                res.json({status:true, error:err});
            }
        })
    }
}