const mongoose=require('mongoose');

const weatherSchema=new mongoose.Schema({
    metadata:{
        sensorId:{
            type:Number,
            required:true
        },
        type:{
            type:String,
            enum:['temperature'],
            default:'temperature'
        }

    },
    timestamp:{
        type:String,
        required:true
       

    },
    temp:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model('weather',weatherSchema)