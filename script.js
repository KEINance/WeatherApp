const apiKey = "2d73b59ce32c945517928d1f69d80c8d";
const geoLocat = "";
const apiCurrent =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}units_metric";
const apiFuture =
  "https://api.openweathermap.org/data/2.5/forecast?lat={latitude}&lon={lonitude}&appid={apiKey}&units=metric";
const icon = document.querySelector(".icons");
const currentDay = dayjs().format("dddd, MMMM D, YYYY h:mm A");

// get from local storage
const forecast = JSON.parse(localStorage.getItem("city"));

//save to local storage
localStorage.setItem("citiesSearched", JSON.stringify(forcast));

// local storage clear
localStorage.clear();

//search new city get currrent and future weather
// shows today forcast with date,weather icon, temp, wind speed, humidity
function Weather(latitude, longitude) {
  // current day
  function currentDay() {
    //current day for loop, plus next 5 days
    for (let i = 0; i < nextDays.list.length; i += 5) {
      const searchedCity = {
        cityName: data.city,
        tempurature: data.tempurature,
        humidity: data.humidity,
        weatherIcon: data.icon,
        windSpeed: data.windSpeed,
        date: data.currentDay,
      }; //fetch current weather
      function retrieveWeather(data) {
        try {
          fetch(apiCurrent + searchedCity)
            .then((response) => response.json(data))
            .then(data(), { currentDay });
        } catch (error) {
          {
            console.log("error no forecast data", err);
          }
        }
      }
      return retrieveWeather();
    }
  }

  //five day
  function fiveDay(data) {
    //current day for loop, plus next 5 days
    for (let i = 0; i < nextDays.list.length; i += 5) {
      const searchedCity = {
        cityName: data.cityName,
        tempurature: data.tempurature,
        humidity: data.humidity,
        weatherIcon: data.icon,
        windSpeed: data.windSpeed,
        date: data.fiveDay,
      };
      //fetch forecast weather

      function showForecastWeather() {
        fetch(apiFuture + searchedCity)
          .then((responce) => responce.json(data))
          .then(data(), { fiveDay });
      }
      return showForecastWeather();
    }
  }
//   return currentDay();
//   return fiveDay();
}

//call current and five day functions
Weather();

//show weather for searched city and display
addEventListener("load", () => {
  try {
    const city = "";
    retrieveWeather(city);
    return citySearch(city);
  } catch (err) {
    console.log("error no forecast data", err);
  }
});

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
