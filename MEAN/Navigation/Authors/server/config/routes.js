const Authors = require('./../controllers/authors');

module.exports = (app)=>{
    app.get('/authors', Authors.index)
    app.post('/authors', Authors.create)
    app.delete('/:id', Authors.destroy)
    app.get('/author/:id', Authors.show)
    app.put('/edit/:id', Authors.update)
}