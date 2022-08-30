const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// const createTempSchema = new Schema({

// })

// const randTempSchema = new Schema({

// })

// const catTempSchema = new Schema({

// })

const libSchema = new Schema({
    // tempCreate: { type : Boolean, default: false },
    // tempRandom: { type : Boolean, default: false },
    // tempCategory: { type : Boolean, default: false },
    
    libBody : {type: String = []},
    // templateType : [createTempSchema , randTempSchema , catTempSchema]
    
    })

module.exports = mongoose.model('Lib' , libSchema);