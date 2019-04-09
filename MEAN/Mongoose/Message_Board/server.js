var express = require("express");
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

var CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [2, "Name must be atleast 2 character long"]},
    comment: {type: String, required: [true, "Comment cannot be empty"], minlength: [10, "Comment must be atleast 10 characters long"]}
}, {timestamps: true} );

var MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [2, "Name must be atleast 2 character long"]},
    message: {type: String, required: [true, "Message cannot be empty"], minlength: [10, "Message must be atleast 10 characters long"]},
    comments: [CommentSchema]
}, {timestamps: true} );

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message')

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var session = require('express-session');
app.use(session({
    secret: "fineboyXYZ",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

const flash = require('express-flash');
app.use(flash ());

var path = require('path');
app.use(express.static(path.join(__dirname + "/static")));

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var mysort = {createdAt: -1};
    Message.find({}, function(err, msgs) {
        if(err){
            console.log("Oops!! Try again");
        }else {
            console.log(msgs);
            res.render("index", {allmessages: msgs});
        }   
    }).sort(mysort);
})

app.post('/message/new', function(req, res) {
    var message = new Message(req.body);

    message.save(function(err) {
        if(err){
            console.log("*".repeat(20));
            for(var key in err.errors) {
                console.log(err.errors[key].message);
                req.flash('invalid', err.errors[key].message);
            }
        }
        res.redirect("/");
    })
})

app.post('/message/:id/comment', function(req, res) {
    var comment = new Comment(req.body);

    comment.save(function(err, data) {
        if(err){
            console.log("#".repeat(20));
            for(var key in err.errors) {
                console.log(err.errors[key].message);
                req.flash('errors', err.errors[key].message);
            }
            res.redirect("/");
        }
        else{
            Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: data}}, function(err, data){
                if(err){
                    console.log("Oops!! Somethiong went wrong!!");
                }
                res.redirect("/");
            })
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})