import React, { useState } from 'react';
import { getLatitude, getLongitude, getWeatherByCoordinates } from './AppFunctions.js';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    const longitude = await getLongitude("Falmouth,UK");
    const latitude = await getLatitude("Falmouth, UK");
    const weather = await getWeatherByCoordinates(longitude, latitude)
    console.log("Falmouth, UK")
    console.log("Longitude:", longitude, "Latitude:", latitude);
    console.log("Weather:", weather);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Graham's Weather Appp
        </h2>
    
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-lg mb-4"
          placeholder="Type a location, e.g. Falmouth, UK"
          value={inputValue}
          onChange={handleInputChange} 
          onKeyDown={handleKeyDown} 
          aria-label="Text input field"
        />

        <button
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
          onClick={handleSubmit}
          aria-label="Submit text"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
