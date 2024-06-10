function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = 'd2eda634567d1e141e28b761b4d5ea57'; // Replace with your API key
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><b>Temperature: ${data.main.temp}°C</b></p>
                <p><b>Humidity: ${data.main.humidity}%</b></p>
                <p><b>Description: ${data.weather[0].description}</b></p>
                <p><b>Air Type: ${data.weather[0].main}</b></p>
                <p><b>Precipitation: ${data.weather[0].precipitation || 'N/A'}</b></p>
                <p><b>Wind Speed: ${data.wind.speed} m/s</b></p>
                <p><b>Wind Direction: ${data.wind.deg}°</b></p>
                <p><b>Overview: ${data.weather[0].main}</b></p>
            `;
        })
        .catch(error => {
            console.log("Error fetching weather data:", error);
        });
}

