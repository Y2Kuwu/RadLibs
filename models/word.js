const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: {type: String, required: true, unique: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Performer', wordSchema);