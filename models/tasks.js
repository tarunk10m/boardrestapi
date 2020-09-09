const mongoose = require('mongoose');
const CreatedAt  = require('./createdAt');

//import * as mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    task_name:{
        type:String,
        required:true

    },
    task_description:{
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    createdAt:CreatedAt.schema
    //{
       // type:Date,
       // expires: 1800,
       // default:Date.now
    //}
    
        
  

});


module.exports = new mongoose.model('Task',TodoSchema);