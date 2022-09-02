const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('connected', function () {
console.log(`Connected to MONGODB ${db.name} at ${db.host} : ${db.port}`)
})

// let gridBucket;

// db.once('open', () =>{
// gridBucket = new mongoose.mongo.GridFSBucket(connect.db, {
// bucketName: 'uploads'
// });
// });