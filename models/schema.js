 const mongoose = require('mongoose');

 const dragDropSchema = new mongoose.Schema({
 	name:{
 		type:String,
 		required: true
 	},
     a:{
         type: Number,
         required: true
     },
     b:{
         type: Number,
         required: true
     },
     c:{
         type: Number,
         required: true
     },
     d:{
         type: Number,
         required: true
     },
     e:{
         type: Number,
         required: true
     }
 });

 const letters = mongoose.model('dragDrop', dragDropSchema);

 module.exports = letters;
 