const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imgname: String,
  desc: String,
  img:
  {
    data: Buffer,
    contentType: String
  }
  },
  {
      timestamps:true
  })

const characterSchema = new Schema({
char: Array,
charActual : [imageSchema],
name: String,
personality: String,
occupation: String, 
accessory: Array
},
{
  timestamp: true
});




 const nameSchema = new Schema({
//   name: String,
//   occupation: String,

   user: {type: Schema.Types.ObjectId, ref: 'User'},  //dont touch
   userName: String,
   userAvatar: String
 }, {
  timestamps: true
 });
// const fullChar = new Schema({
// charSel : Array
// })


// const characterSchema = new Schema({   //pull character image from seed
   
//   charSel: {String: []},                             
//   main: String,
//   charSet: [{
//     type:Schema.Types.ObjectId,
//     ref: 'Acc'
//   }],
//   acc: [nameSchema]
// }, {
//   timestamps: true
// });

module.exports = mongoose.model('Character', characterSchema);