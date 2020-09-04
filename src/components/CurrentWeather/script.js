import currentWeatherFactory from '../../util/CurrentWeather/currentWeather'
const currentWeather = currentWeatherFactory();

console.log(currentWeather.getCurrentWeatherDataByCity());

export default {
  name: 'CurrentWeather',
  data() {
    return {};
  },
};
