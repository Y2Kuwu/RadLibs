const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var imageSchema = new Schema({
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
    module.exports = ('Img' , imageSchema);