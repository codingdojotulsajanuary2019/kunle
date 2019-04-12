const Tasks = require('./../controllers/tasks');

module.exports = (app)=>{
    app.get('/', Tasks.index)
    app.post('/tasks', Tasks.create)
    app.delete('/:title', Tasks.destroy)
    app.get('/:title', Tasks.show)
    app.put('/:title', Tasks.update)
}