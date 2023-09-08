// const dayjs = require("dayjs");
const apiKey = "2d73b59ce32c945517928d1f69d80c8d";
const icon = document.querySelector(".icons");
const currentDay = new Date();
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("cityInput");
const searchHistory = document.getElementById('searchHistory');
// get from local storage
const forecast = JSON.parse(localStorage.getItem("city"));
//save to local storage
localStorage.setItem("citiesSearched", JSON.stringify(forecast));
//search history 
function saveSearches() {
  localStorage.setItem('history', json.stringify(searchHistory))
}
// local storage clear
localStorage.clear();

searchBtn.addEventListener("click", function () {
  const node = document.createElement("li");
  const textnode = document.createTextNode(cityInput.value);
  node.appendChild(textnode);
  document.getElementById("searchHistory").appendChild(node);

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

//call current day
async function currentWeather(lat, lon) {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  )
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
      let current = document.querySelector('.currentWeather');
      current.innerHTML = '';

      const cityCard = document.createElement("div");
      cityCard.setAttribute("class", "currentCard");

      // city name, the date, an icon representation
      // of weather conditions, the temperature, the humidity,
      //and the wind speed

      const cityName = document.createElement("h1");
      cityName.textContent = cityInput.value;
      const date = document.createElement("h6");
      date.textContent = `Temp: ${currentDay}`;
      const temp = document.createElement("h6");
      temp.textContent = `Temp: ${data.main.temp}`;
      const feelsLike = document.createElement("h6");
      feelsLike.textContent = `Temp: ${data.main.feels_like}`;
      const humidity = document.createElement("h6");
      humidity.textContent = `Humidity: ${data.main.humidity} `;
      const wind = document.createElement("h6");
      wind.textContent = `Wind Speed: ${data.wind.speed} `;

      const icon = document.createElement("img");
      icon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );

      cityCard.append(cityName, icon, date, temp, feelsLike, humidity, wind);
      document.querySelector(".currentWeather").append(cityCard);
    });
}
//fetch five days
function forecastWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  )
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
      let forcast = document.querySelector(".forcast");
      forcast.innerHTML = '';
      //make a 24 call for the next five days
      for (let i = 4; i < data.list.length; i = i + 8) {
        console.log(data.list[i]);
        
        const cityCard = document.createElement("div");
        cityCard.setAttribute("class", "currentCard");
        const fiveD = document.createElement("h4");
        fiveD.textContent = `'5-Day Forecast:'`;
        const cityName = document.createElement("p");
        cityName.textContent = `${data.city.name}`;
        const date = document.createElement("p");
        date.textContent = `Temp: ${data.list[i].dt_text}`;
        const temp = document.createElement("p");
        temp.textContent = `Temp: ${data.list[i].main.temp}`;
        const feelsLike = document.createElement("p");
        feelsLike.textContent = `Temp: ${data.list[i].main.feels_like}`;
        const humidity = document.createElement("p");
        humidity.textContent = `Humidity: ${data.list[i].main.humidity} `;
        const wind = document.createElement("p");
        wind.textContent = `Wind Speed: ${data.list[i].wind.speed} `;

        const icon = document.createElement("img");
        icon.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`
        );

        cityCard.append(cityName, icon, date, temp, feelsLike, humidity, wind);
        document.querySelector(".forecast").appendChild(cityCard);
      }
    });
}
//retrieve data and deploy
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
  set.clear();
};
//save searches in history
function createSaveSearches() {
  console.log('check err')
  const historyBtn = searchHistory;
  searchHistory.append(historyBtn)
}

// previously searched
function previouslySearched() {
  console.log('preious search err')
  const searchedCities = json.parse(localStorage.getItem('city'));

  if(searchedCities.searchedCity.includes(city)) {
    searchedCities.searchedCity.push(city);
    saveSearches();
    createSaveSearches(city);
  }
}

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
