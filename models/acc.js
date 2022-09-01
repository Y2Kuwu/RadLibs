const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccSchema = new Schema({
  accessory: {data: Buffer, contentType: String},
  personality: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Acc', AccSchema);