// src/geocode.js

export async function geocodeAddress(address) {
  const nominatimApiUrl = 'https://nominatim.openstreetmap.org/search';

  const url = `${nominatimApiUrl}?q=${encodeURIComponent(address)}&format=json&limit=1`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'YourAppName/1.0 (your-email@example.com)'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.length > 0) {
      const result = data[0];
      const latitude = parseFloat(result.lat);
      const longitude = parseFloat(result.lon);
      const displayName = result.display_name;

      console.log(`Geocoded Address: ${displayName}`);
      console.log(`Geocoded Latitude: ${latitude}`);
      console.log(`Geocoded Longitude: ${longitude}`);

      return {
        address: displayName,
        latitude: latitude,
        longitude: longitude
      };
    } else {
      console.log(`No geocoding results found for "${address}"`);
      return null;
    }

  } catch (error) {
    console.error("Error geocoding address:", error);
    return null;
  }
}
