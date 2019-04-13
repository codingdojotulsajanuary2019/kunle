const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: (req, res) =>{
        console.log("index route");
        console.log(req.method);
        Task.find({}, (err, tasks) =>{
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.json({status: true, tasks: tasks})
            }
        })
    },
    create: (req, res) =>{
        console.log("create route");
        console.log(req.body);
        const task = new Task(req.body);
        task.save((err) => {
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
        console.log(req.method);
        const title = req.params.title;
        Task.findOne({title:title}, (err, title)=>{
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status:true, task: title})
            }
        })
    },
    update: (req, res) =>{
        console.log("update route");

        Task.findOneAndUpdate({title: req.params.title}, {$set: {
            completed: req.body.completed
        }}, (err)=> {
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
        console.log(req.method);
        console.log(req.pararms);
        const title = req.params.title;
    Task.deleteOne({title: title}, (err, task)=>{
            if(err){
                res.json({status:false, error:err});
            }
            else{
                res.redirect('/');
            }
        })
    },
}