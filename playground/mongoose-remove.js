const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove({}).then((arguments) => {
    
// })

Todo.findByIdAndRemove('59cd8ccc1f809869b6b35837').then((todo) => {
    console.log(todo);
})