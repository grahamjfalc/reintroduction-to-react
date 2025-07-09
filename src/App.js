// import React, { useState } from 'react';
// import { getLatitude, getLongitude, getWeatherByCoordinates } from './AppFunctions.js';
import { Header } from './Header.js';

function App() {
  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit = async () => {
  //   const longitude = await getLongitude("Falmouth,UK");
  //   const latitude = await getLatitude("Falmouth, UK");
  //   const weather = await getWeatherByCoordinates(longitude, latitude)
  //   console.log("Falmouth, UK")
  //   console.log("Longitude:", longitude, "Latitude:", latitude);
  //   console.log("Weather:", weather);
  // };

  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     handleSubmit();
  //   }
  // };


  return (
    <div className="min-h-screen text-center bg-gradient-to-br from-purple-500 to-indigo-600 p-4">
      {Header("Graham's Weather App")}
    </div>
  );
}

export default App;
