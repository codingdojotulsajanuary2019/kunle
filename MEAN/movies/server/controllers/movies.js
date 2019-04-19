const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

module.exports = {
    index: (req, res) =>{
        console.log("index route");
        Movie.find({}, (err, movies) =>{
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.json({status: true, movies: movies})
            }
        })
    },
    create: (req, res) =>{
        console.log("create route");
        const movie = new Movie(req.body);
        movie.average_rating = req.body.comment.rating;
        movie.save((err) => {
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

        Movie.update({_id: req.params.id}, {$pull: {comment: {_id:req.body.id}}}, (err, cake) => {
            if(err){
                res.json({status:false, error:err});
            }
            else{
                res.json({status: true});
            }
        })
    },
    show: (req, res) => {
        Movie.findOne({_id:req.params.id}, (err, movie)=>{
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status:true, movie: movie})
            }
        })
    },
    destroy: (req, res) => {
        Movie.deleteOne({_id:req.params.id}, (err, movie) => {
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status:true, movie: movie})
            }
        })
    },
    updateComment: (req, res) => {
        var opts = { runValidators: true };
        let x = parseInt(req.body.rating);
        newTotal = x;

        Movie.findOne({_id: req.params.id}, (err, movie) => {
            if(movie){
                for(let i in movie.comment){   

                    if(movie.comment[i].rating){
                        console.log(" let see");
                        console.log(movie.comment[i].rating);  
                        newTotal += movie.comment[i].rating; 
                    }                               
                }

                newTotal = newTotal/(movie.comment.length +1);
                console.log(" i am here");
                console.log(newTotal)
                movie.average_rating = newTotal;
                movie.comment.push(req.body);

                movie.save(opts, (err, cake) => {
                    if(err){
                        console.log(err)
                        res.json({status:false, error:err});
                    }
                    else{
                        console.log(cake)
                        res.json({status: true});
                    }
                })
            }
        })
    }
}