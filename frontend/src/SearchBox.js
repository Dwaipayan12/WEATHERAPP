import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import WeatherApp from './weatherApp';
export default function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="6a45c0fb50f836d0e6b129daa78afc1a";
    let getWeatherInfo=async(city)=>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
}
catch(err){
   throw err;
}
};
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getWeatherInfo(city);
        updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    };
  return (
    <div className='search-box'><h2>Search For Weather</h2>
    <form onSubmit={handleSubmit}>
        <TextField 
        id="city" 
        label="city name" 
        variant="outlined" 
        required 
        value={city} 
        onChange={handleChange}/>
       <br></br>
       <br></br>
        <Button 
        variant="contained" 
        type="submit">
        Submit</Button>
        {error && <p style={{color:"red"}}>No such place exists in API</p>}
        </form>
    </div>
  )
}
