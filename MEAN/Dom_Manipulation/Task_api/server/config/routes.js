const Tasks = require('./../controllers/tasks');

module.exports = (app)=>{
    app.get('/tasks', Tasks.index)
    app.post('/tasks', Tasks.create)
    app.delete('/:id', Tasks.destroy)
    app.get('/:title', Tasks.show)
    app.put('/:id', Tasks.update)
}