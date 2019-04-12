const Bingo = require('./../controllers/bingos');

module.exports = (app)=>{
    
    app.get('/bingo', Bingo.index)
    app.post('/bingo', Bingo.create)
    app.get('/destroy/:id', Bingo.destroy)
    app.get('/:name', Bingo.show)
    app.post('/:id', Bingo.update)
}