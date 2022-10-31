var mongoose = require('mongoose');

var connection = mongoose.createConnection('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("success")
});
var blogschema = new mongoose.Schema({ 
    name: String, 
    id: Number,
    age: Number
});
var personInfo = connection.model('personInfo', blogschema,'personInfo');
personInfo.updateOne({'id':7}, {'name': "张三", 'age': 20}, (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
  
})
