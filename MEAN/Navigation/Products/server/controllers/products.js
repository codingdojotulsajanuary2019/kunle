const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    index: (req, res) =>{
        console.log("index route");
        Product.find({}, (err, products) =>{
            if(err){
                res.json({status: false, error: err});
            }
            else{
                res.json({status: true, products: products})
            }
        })
    },
    create: (req, res) =>{
        console.log("create route");
        const product = new Product(req.body);
        product.save((err) => {
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
        Product.updateOne({_id: req.params.id}, req.body, opts, (err, product) => {
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status: true});
            }
        })
    },
    show: (req, res) => {
        Product.findOne({_id:req.params.id}, (err, product)=>{
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status:true, product: product})
            }
        })
    },
    destroy: (req, res) => {
        Product.deleteOne({_id:req.params.id}, (err, product) => {
            if(err){
                res.json({status:false, error:err});
            }
            else {
                res.json({status:true, product: product})
            }
        })
    }
}