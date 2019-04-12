const Bingo = require('./../controllers/bingos');

module.exports = (app)=>{
    
    app.get('/bingo', Bingo.index)
    app.post('/bingo', Bingo.create)
    app.delete('/:name', Bingo.destroy)
    app.get('/:name', Bingo.show)
    app.put('/:name', Bingo.update)
}