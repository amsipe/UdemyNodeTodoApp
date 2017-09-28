const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '59c83d2a1a84b85c17f2e84b';
if(!ObjectID.isValid(id)){
    console.log("ID not valid");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todos by ID', todo)
// }).catch((e) => {
//     return console.log(e);
// })

User.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('User by ID', todo)
}).catch((e) => {
    return console.log(e);
})