function getWeather() {
    const city = document.getElementById('cityInput').value;

    // Simulated weather data
    const weatherData = {
        name: city,
        main: {
            temp: Math.floor(Math.random() * 30) - 5, // Random temperature between -5°C to 25°C
            humidity: Math.floor(Math.random() * 100), // Random humidity between 0% to 100%
        },
        weather: [{
            description: 'Partly cloudy', // Simulated weather description
        }],
    };

    // Display weather information
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h3>Weather in ${weatherData.name}</h3>
        <p><i class="fas fa-thermometer-half"></i> Temperature: ${weatherData.main.temp} &deg;C</p>
        <p><i class="fas fa-tint"></i> Humidity: ${weatherData.main.humidity}%</p>
        <p><i class="fas fa-cloud-sun"></i> Description: ${weatherData.weather[0].description}</p>
    `;
}
