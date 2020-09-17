import currentWeatherFactory from '../../util/CurrentWeather';
// import fiveDayForecastFactory from '../../util/FiveDayForecast';
const currentWeather = currentWeatherFactory();
// const fiveDayForecast = fiveDayForecastFactory();

async function callCurrentWeatherApi() {
  // const currentWeatherData = await currentWeather.getCurrentWeatherDataByCity().then((result) => {
  //   console.log('What is result');
  //   console.table(result);
  //   return result;
  // });
  const currentWeatherData = await currentWeather.getCurrentWeatherDataByCity();

  console.log('Checking for currentWeatherData in script.js')
  console.table(currentWeatherData);
  const cityName = currentWeatherData.name;
  // const weather = currentWeatherData.weather;

  console.log('What is cityName:: ' + cityName);
  return currentWeatherData;
}

const currentWeatherData = callCurrentWeatherApi().then(result => {
  console.log('What is result');
  console.table(result);
  console.log(result.name)
  return result;
});

export default {
  name: 'CurrentWeather',
  data() {
    return {
      cityName: currentWeatherData.name
    };
  },
};
