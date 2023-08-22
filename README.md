## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Credit
[Weather Icons](https://www.flaticon.com/free-icons/weather)
</br>
[Gradient](https://cssgradient.io/)

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

install $ npm init -y
We initiate a new Node application.

$ npm i dayjs
We install Day.js with npm i dayjs command.




API KEYS IN ENDPOINTS:
So first, your apiKey variable isn’t being dropped into your API endpoints using the right syntax just yet. Right now, the API endpoints are being created as standard strings like this:
"https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}units_metric"
If we want to insert variables into a string, we actually need to use string interpolation by wrapping the string in `` backticks and the dropping a JavaScript expression into the string where the variable should go using ${apiKey} syntax. So your apiCurrent variable should actually look like this:
`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}&units_metric`
Fixing that on both apiCurrent and apiFuture will solve the issue of the key being correctly added to the endpoint to authenticate your requests with the OpenWeather API.
SCRIPT LINK
The most important thing we need to do is link our JavaScript file to index.html so that we can actually see what it’s doing. Add a <script src="script.js"></script> tag at the end of the HTML file above the </body> tag.
Making these changes should not only solve the API key issue but also make the JS start doing work. I noticed that running the script is throwing errors but they’ll be new ones you haven’t seen yet. I’d like you to spend a while working on those and seeing if you can figure out how to debug them independently. Then like I said, feel free to reach back out to use if 20ish minutes have passed and you don’t feel like you’re making progress! :raised_hands::skin-tone-3: