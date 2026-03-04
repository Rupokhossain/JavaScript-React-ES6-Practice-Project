const tempEl = document.querySelector("#temperature");
const windEl = document.querySelector("#windspeed");
const loader = document.querySelector("#loader");
const weatherInfo = document.querySelector("#weather-info");
const btn = document.querySelector("#refreshBtn");

// async function
async function getWeatherData() {
    loader.style.display = "block";
    weatherInfo.style.opacity = "0.3";
    weatherInfo.style.display = "none";

    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=23.7104&longitude=90.4074&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,apparent_temperature");

        const data = await response.json();

        const {
            temperature_2m, 
            relative_humidity_2m, 
            apparent_temperature, 
            is_day, 
            wind_speed_10m
        } = data.current;

        console.log(`Temperature: ${temperature_2m}°C`);

        // display in ui
        document.querySelector("#temperature").innerText = `${temperature_2m}°C`
        document.querySelector("#windspeed").innerText = `Air: ${wind_speed_10m} km/h`;
        weatherInfo.style.display = "block";

    }
    catch (error){
        console.log('somthing error!', error);
    }
    finally {
        loader.style.display = "none"; 
        weatherInfo.style.opacity = "1";
    }
}

btn.addEventListener("click", getWeatherData);

getWeatherData();

