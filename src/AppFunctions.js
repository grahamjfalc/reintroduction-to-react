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

      return {
        address: displayName,
        latitude: latitude,
        longitude: longitude
      };

    } else {
      return null;
    }

  } catch (error) {
    return null;
  }
}

export async function getLatitude(address) {
  try {
    const result = await geocodeAddress(address);

    if (result && typeof result.latitude === 'number') {
      return result.latitude;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function getLongitude(address) {
  try {
    const result = await geocodeAddress(address);

    if (result && typeof result.longitude === 'number') {
      return result.longitude;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function getWeatherByCoordinates(latitude, longitude) {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,wind_direction_10m,relative_humidity_2m&forecast_days=1`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)

    if (data.current && typeof data.current.temperature_2m !== 'undefined') {
      const temperature = data.current.temperature_2m;
      const unit = data.current_units ? data.current_units.temperature_2m : '°C';
      console.log(`Current temperature at ${latitude}, ${longitude}: ${temperature}${unit}`);
      return `${temperature}${unit}`;
    } else {
      console.log(`Temperature data not available for ${latitude}, ${longitude}.`);
      return null;
    }

  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
