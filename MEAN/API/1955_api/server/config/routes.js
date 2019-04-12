const Users = require('../controllers/users');

module.exports = (app) =>{
    app.get('/', Users.index);
    app.get('/new/:name', Users.create)
    app.post('/users', Users.create)
    app.delete('/:name', Users.destroy)
    app.get('/:name', Users.show)
}