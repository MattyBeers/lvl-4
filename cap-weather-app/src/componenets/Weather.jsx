import React, { useState } from 'react'
import { useWeatherContext } from '../context/WeatherContext.jsx'
import axios from 'axios'


const Weather = () => {
  const { updateWeatherData, weatherData, loading } = useWeatherContext();
  const [Latitude, setLatitude] = useState("")
  const [Longitude, setLongitude] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const res = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=6b2421a9673ccfda4f66f7a88cdec1cb')
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?&lat=${Latitude}&lon=${Longitude}&exclude=hourly,daily&appid=6b2421a9673ccfda4f66f7a88cdec1cb`)
      const newData = response.data;
      updateWeatherData(prevState => [...prevState, newData]);
      // console.log("weatherData State: "+ weatherData)
      console.log('API Request Successful:', newData);
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  };
  return (
    <div>
      <h2>Weather Page 33.44 -94.04</h2>
      <form onSubmit={handleSubmit}>
     
        <label>
          Latitude:
          <input
            type="text"
            value={Latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </label>
        <br />
        <label>
          Longitude:
          <input
            type="text"
            value={Longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          Get Weather
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
        ) : (
            <div>
          <p>Timezone: {weatherData[0]?.timezone} K</p>
          <p>Temperature: {weatherData[0]?.current?.temp}K</p>
          <p>Feels Like: {weatherData[0]?.current?.feels_like} </p> 
          
          
            </div>
          )}
        </div>
      );
    };
    export default Weather