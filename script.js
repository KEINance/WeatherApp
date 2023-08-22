// const dayjs = require("dayjs");
const apiKey = "2d73b59ce32c945517928d1f69d80c8d";
const icon = document.querySelector(".icons");
const currentDay = new Date();
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('cityInput')
// get from local storage
const forecast = JSON.parse(localStorage.getItem("city"));
//save to local storage
localStorage.setItem("citiesSearched", JSON.stringify(forecast));
// local storage clear
localStorage.clear();

searchBtn.addEventListener('click', function() {
  geoData(cityInput.value);
});
// collects lat and lon
async function geoData(cityName) {
  console.log(cityName);
  const geoLocat = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
  const responce = await fetch(geoLocat);
  const data = await responce.json();
  console.log(data);
  currentWeather(data[0].lat, data[0].lon);
  forecastWeather(data[0].lat, data[0].lon);
}
// geoData('New York'); //test for pulling lat lon

// next days not defined from current day function
function currentWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  )
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
      const cityCard = document.createElement('div')
      cityCard.setAttribute('class', 'currentCard')


     // city name, the date, an icon representation 
     // of weather conditions, the temperature, the humidity, 
     //and the wind speed


      const cityName = document.createElement('h3');
      cityName.textContent = cityInput.value;
      const temp = document.createElement('h4');
      temp.textContent = `Temp: ${data.main.temp}`;
      const humidity = document.createElement('h4');
      humidity.textContent = `Humidity: ${data.main.humidity} `;
      const humidity = document.createElement('h4');
      humidity.textContent = `Humidity: ${data.main.humidity} `;


      const icon = document.createElement('img')
      icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

      cityCard.append(cityName, temp, humidity, icon)
        document.querySelector('.currentWeather').append(cityCard);
    });
}

function forecastWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  )
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);

      for(let i = 4; i < data.list.length; i = i + 8){
        console.log(data.list[i])
        const temp = document.createElement("p")
        temp.textContent = `Temp: ${data.list[i].main.temp}`






        document.querySelector(".forecast").appendChild(temp)
      }
    });
}

function retrieveWeather(data) {
  try {
    fetch(apiCurrent + searchedCity.cityName)
      .then((response) => response.json())
      .then(data);
  } catch (error) {
    {
      console.log("Error no forecast data!", err);
    }
  }
}
console.log(retrieveWeather);

//show weather for searched city and display
addEventListener("click", () => {
  try {
    const city = "";
    retrieveWeather(city);
    return citySearch(city);
  } catch (err) {
    console.log("error no forecast data", err);
  }
});

//search new city get currrent and future weather
// shows today forcast with date,weather icon, temp, wind speed, humidity
// function Weather(latitude, longitude) {
//   // current day
//   function currentDay(data) {
//     //current day for loop, plus next 5 days
//     for (let i = 0; i < nextDays.list.length; i += 5) { // next days not defined from current day function
//       const searchedCity = {
//         cityName: data.city,
//         tempurature: data.temperature,
//         humidity: data.humidity,
//         weatherIcon: data.icon,
//         windSpeed: data.windSpeed,
//         date: data.currentDay,
//       }; //fetch current weather

//       console.log(searchedCity)

//       function retrieveWeather(searchedCity) {
//         try {
//           fetch(apiCurrent + searchedCity.cityName)
//             .then((response) => response.json())
//             .then(weatherData);
//         } catch (error) {
//           {
//             console.log("Error no forecast data!", err);
//           }
//         }
//       }
//       return retrieveWeather();
//     }
//   };
//   return currentDay();

//   //five day
//   function fiveDay(data) {
//     //current day for loop, plus next 5 days
//     for (let i = 0; i < nextDays.list.length; i += 5) {
//       const searchedCity = {
//         cityName: data.cityName,
//         tempurature: data.temperature,
//         humidity: data.humidity,
//         weatherIcon: data.icon,
//         windSpeed: data.windSpeed,
//         date: data.fiveDay,
//       };
//       //fetch forecast weather

//       function showForecastWeather() {
//         fetch(apiFuture + searchedCity.cityName)
//           .then((responce) => responce.json(data))
//           .then(weatherData);
//       }
//       return showForecastWeather();
//     }
// };
// return fiveDay();
// }

//call current and five day functions
// Weather();

// //5 day unordered list
// innerText.html =
// `
// <div id='fiveDay' class='height: 200px; width: 200px; row'>
// <ul>
//     <li>${data.dayLoop}</li>
// </ul>
// </div>
// `
// };
