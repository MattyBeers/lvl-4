import React from'react'
import { useWeatherContext } from '../context/WeatherContext.jsx';
import { Link } from 'react-router-dom';

const Record = () => {
  const { weatherData, deleteRecord } = useWeatherContext();

  // Check if weatherData is an array before mapping over it
  if (!Array.isArray(weatherData)) {
    console.error("weatherData is  not an array or is it:", weatherData);
    return null; // or return a message or an empty component as needed
  }

  return (
    <div>
      <h1>Record Page</h1>
      <h2>Record Page</h2>
      {weatherData.length > 0 ? (
        weatherData.map((record, index) => (
          <div key={record.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          
            <p>{`City: ${record.city}`}</p>
            <p>{`Temperature: ${record.temperature}`}</p>
            <p>Timezone: {record.timezone}</p>
            <p>Temperature: {record.current.temp}K</p>
            <p>Feels Like{record.current.feels_like}K</p>

            <button onClick={() => deleteRecord(record.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No records found.</p>
      )}
    </div>
  );
};

export default Record;
