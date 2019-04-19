const Movies = require('./../controllers/movies');

module.exports = (app)=>{
    app.get('/mymovies', Movies.index)
    app.post('/mymovie', Movies.create)
    app.delete('/:id', Movies.destroy)
    app.get('/mymovie/:id', Movies.show)
    app.put('/edit/:id', Movies.update)
    app.put('/mymovies/edit/:id', Movies.updateComment)
}