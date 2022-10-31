 require('dotenv').config()
 const mongoose = require('mongoose');

 mongoose.connect(process.env.url);

 const db = mongoose.connection;

//  error
 db.on('error', console.error.bind(console,'connection error:'));

//  up and running then  print the message 
 db.once('open', function(){
     console.log('Successfully Connected to the database');
 })