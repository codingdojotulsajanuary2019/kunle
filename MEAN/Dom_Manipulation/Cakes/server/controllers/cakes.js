const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports = {
    index: (req, res) =>{
        console.log("index route");
        Cake.find({}, (err, cakes) =>{
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.json({status: true, cakes: cakes})
            }
        })
    },
    create: (req, res) =>{
        console.log("create route");
        const cake = new Cake(req.body);
        cake.save((err) => {
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.json({status: true});
            }
        })
    },
    update: (req, res) => {
        var opts = { runValidators: true };
        Cake.findOne({_id: req.params.id}, (err, cake) => {
            if(cake){
                let sum = 0;
                let num =0;
                for(let x in cake.comment){
                    if(cake.comment[x].rating){
                        sum += cake.comment[x].rating;
                        num ++;
                    }
                }
                sum += req.body.rating;
                sum = sum/(num +1);
                console.log(sum);

                cake.average_rating = sum;
                cake.comment.push(req.body);
                cake.save((err) => {
                    if(err){
                        console.log(err)
                        res.json({status: false, error: err});
                    }
                    else{
                        console.log("done");
                        res.json({status: true});
                    }
                })
            }
            else{
                res.json({status: false, error: err});
            }
        })
    }
}