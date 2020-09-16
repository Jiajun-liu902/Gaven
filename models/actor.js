const mongoose = require('mongoose');
const actorSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    birthYear:{
        validate:{
            validator:function(newAge){
                if(Number.isInteger(newAge))
                 return true;
                else return false
            },
            message:'Birth year should be an integer'
        },
        type:Number,
        required:true
    },
    movies:{
        type:mongoose.Schema.ObjectId,
        ref:'Movie'
    }
})
module.exports = mongoose.model('Actor',actorSchema);