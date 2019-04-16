const Cakes = require('./../controllers/cakes');

module.exports = (app)=>{
    app.get('/cakes', Cakes.index)
    app.post('/cakes', Cakes.create)
    // app.delete('/:id', Cakes.destroy)
    // app.get('/:title', Cakes.show)
    app.put('/:id', Cakes.update)
}