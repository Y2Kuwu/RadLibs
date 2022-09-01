const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
  name: String,
  occupation: String,

  user: {type: Schema.Types.ObjectId, ref: 'User'},  //dont touch
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});
const fullChar = new Schema({
charSel : Array
})


const characterSchema = new Schema({   //pull character image from seed
  // charSel: {data: Buffer, contentType: String} , 
  give : [fullChar], 
  charSel: Array,                             
  main: String,
  charSet: [{
    type:Schema.Types.ObjectId,
    ref: 'Acc'
  }],
  acc: [nameSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Character', characterSchema);