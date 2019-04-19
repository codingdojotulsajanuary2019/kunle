const Products = require('./../controllers/products');

module.exports = (app)=>{
    app.get('/myproducts', Products.index)
    app.post('/myproduct', Products.create)
    app.delete('/:id', Products.destroy)
    app.get('/myproduct/:id', Products.show)
    app.put('/edit/:id', Products.update)
}