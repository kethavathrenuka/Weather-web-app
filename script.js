async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
  
    if (city === "") {
      document.getElementById("weatherResult").innerHTML = "<p>Please enter a city name.</p>";
      return;
    }
  
    const apiKey = "e47eebd732539880ff0237525a143e21"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      console.log(data); 
  
      if (data.cod === 200) {
        document.getElementById("weatherResult").innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found. Try again!</p>`;
      }
  
    } catch (error) {
      console.error("Fetch error:", error);
      document.getElementById("weatherResult").innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
  }
  