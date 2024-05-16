import OpenWeatherMap from 'openweathermap-ts';

const openWeather = new OpenWeatherMap({
  apiKey: 'e69fd19bdf3e272cb1e88c0bc8382fd0'
});

openWeather
  .getCurrentWeatherByCityName({
    cityName: 'Cedar Park'
  })
  .then((weather) => console.log('Weather object is', weather));

// or async await example
