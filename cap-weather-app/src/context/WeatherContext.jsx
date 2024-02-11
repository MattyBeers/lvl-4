import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

//context to manage the state and functions related to weather data
const WeatherContext = createContext();

// Custom hook to access the WeatherContext within components
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};
//WeatherProvider component to wrap your application and manage the state
export const WeatherProvider = ({ children }) => {
   
    //State to store weather data
  const [weatherData, setWeatherData] = useState([]);
 
  // State to track loading state while fetching data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

        //Make a GET request to the specified API_URL with the provided API key
        const response = await axios.get('API_URL', {
          headers: {
            'x-api-key': '6b2421a9673ccfda4f66f7a88cdec1cb',    
          },
        });

        //Update the state with the fetched weather data
        setWeatherData(response.data);
        console.log(weatherData)
        //Set loading to false to indicate that data has been fetched
        setLoading(false);
      } catch (error) {
        // Log an error message if there's an issue fetching data
        console.error('Error fetching data:', error);
      }
    };

    //Call fetchData when the component mounts
    fetchData();
  }, []);//The empty dependency array ensures that this effect runs only once when the component mounts

  //Function to delete a record based on its ID
  const deleteRecord = (recordId) => {

    //Update the state by filtering out the record with the specified ID
    setWeatherData((prevData) => prevData.filter((record) => record.id !== recordId));
  };
//Function to update weather data with new data
  const updateWeatherData = (newData) => {
    //Set the state with the new weather data
    setWeatherData(newData);
  };

  // Provide the state and functions to the components via the context provider
  return (
    <WeatherContext.Provider value=
    {{ weatherData,
     loading,
    deleteRecord,
    updateWeatherData }}> 
    {children}
    </WeatherContext.Provider>
  );
};
