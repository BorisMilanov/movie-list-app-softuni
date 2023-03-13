const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  
   
        
        name: {type:String},
        user_id: {
            type:String}

   
})

module.exports = mongoose.model('Movie',moviesSchema)