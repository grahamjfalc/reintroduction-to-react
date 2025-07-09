// src/Header.js
import React from 'react';

// This is a functional React component
function Header(props) {
  // Access the title via props.title
  return (
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
      {props.title}
    </h2>
  );
}

export default Header; // Export the component so it can be imported