const users = require('../controllers/users');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render("index");
    })

    app.post('/newUser', function(req, res) {
        users.create(req, res)
    })

    app.get('/success', function(req, res) {
        res.render("success");
    })

    app.post('/returningUser', function(req, res) {
        users.findUser(req, res);
    })
}