const http = require('http');

function getWeather(city) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  http.get(apiUrl, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    response.on('end', () => {
      try {
        const weatherData = JSON.parse(data);
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
        console.log(`Description: ${weatherData.weather[0].description}`);
      } catch (error) {
        console.error('Error parsing weather data:', error.message);
      }
    });
  }).on('error', (error) => {
    console.error('Error fetching weather data:', error.message);
  });
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter city name: ', (city) => {
  getWeather(city);
  rl.close();
});
