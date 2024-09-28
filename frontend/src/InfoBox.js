import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=60";
  return (
    <div className="Info-Box">
        <div className="cardContainer">
        <Card sx={{  width: '100%', maxWidth: 400  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
         <div>Temparature={(info.temp - 273.15).toFixed(2)} &deg;C</div>
         <div>Feels_Like={(info.feelsLike - 273.15).toFixed(2)} &deg;C</div>
         <div>Humidity={info.humidity}</div>
         <div>Temp_Max={(info.tempMax - 273.15).toFixed(2)} &deg;C</div>
         <div>Temp_Min={(info.tempMin - 273.15).toFixed(2)} &deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}
