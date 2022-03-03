const express=require('express');
const router=express.Router();
const {addWeatherData,avgTemp}=require('../controllers/weather');



router.post('/api/weatherData',addWeatherData)

router.get('/api/avgTempWeatherData',avgTemp)

module.exports=router;

