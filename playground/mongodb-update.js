const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5af2a90f989c959d7b8ac7ff')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })
  db.collection('Users').findOneAndUpdate({
    name: 'Conifer'
  }, {
    $set: {
      name: 'Toms'
    },
    $inc: {
      age: 1
    }
  })
  //db.close()
})
