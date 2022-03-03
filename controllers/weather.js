const  mongoose  = require('mongoose');
const weatherModel=require('../models/weatherModel');

exports.addWeatherData=async(req,res)=>{
    
     const Weathers= await weatherModel.insertMany(req.body)
     try {
        if(Weathers){
            res.status(201).json({
                Weathers
            })
        }
         
     } catch (error) {
        res.status(400).json({
            Message:'Something went wrong'
        })
         console.log(error)
     }
};

exports.avgTemp=async(req,res)=>{
    try {
        const averageTemp=  await weatherModel.aggregate([
            {
                $group:{
                    _id:"$metadata",
                    avgTemp:{  $avg:"$temp"}
                }
            }
          
          ]).exec();
          console.log(averageTemp)
          res.status(200).json({
            averageTemp
        })
    } catch (error) {
        res.status(400).json({
            Message:'Something went wrong'
        })
         console.log(error)
        
    }
  

}




