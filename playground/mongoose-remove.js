const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findByIdAndRemove('5af5a84bb8f87e1110234fb3').then((todo) => {
//   console.log(todo)
// })

Todo.findOneAndRemove({_id: '5af5a935b8f87e1110234fe5'}).then((todo) => {
  console.log(todo)
})
