const bingos = require('../controllers/bingos.js');
module.exports = function(app) {

    app.get('/', function(req, res) {
        bingos.index(req, res);
    })

    app.get('/bingo/new', function(req, res) {
        res.render("newbingo");
    })
    
    app.post('/bingo', function(req, res) {
        bingos.create(req, res);
    })
    
    app.get('/bingo/edit/:id', function(req, res) { 
       bingos.editBingo(req, res);
    })
    
    app.post('/bingo/:id', function(req, res) {
        bingos.updateBingo(req, res);
    });
    
    app.get('/bingo/:id', function(req, res) {
        bingos.showBingo(req, res);
    })
    
    app.get('/bingo/destroy/:id', function(req, res) {
       bingos.deleteBingo(req, res);
    })
}