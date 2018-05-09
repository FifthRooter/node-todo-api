const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // Delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // Delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // Find one and delete one
  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5af28ca8ad75914764cbfe08')}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').deleteMany({name: 'Arbestor'}).then((result) => {
  //   console.log(result)
  // })
  //db.close()
})
