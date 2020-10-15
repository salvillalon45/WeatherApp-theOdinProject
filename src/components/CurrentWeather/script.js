import currentWeatherFactory from '../../util/CurrentWeather';
const currentWeather = currentWeatherFactory();

export default {
  name: 'CurrentWeather',
  data() {
    return {
        responseAvailable: false,
        cityName: '',
        currentWeatherData: '',
        currentDay: '',
        currentTime: '',
        weatherDescription: '',
        weatherIcon: '',
        humidity: '',
        wind: '',
        precipitation: '',
    };
  },
  methods: {
      // This function is called everytime the user hits the submit button
    async submitForm(requestedCity) {
        this.currentWeatherData = await currentWeather.processCurrentWeatherData(requestedCity);
        this.responseAvailable = this.currentWeatherData !== 1;
        this.currentDay = currentWeather.getDayOfWeek();
        this.currentTime = currentWeather.getCurrentTime();
        this.weatherDescription = currentWeather.toUpper(this.currentWeatherData.weather[0].description);
        this.weatherIcon = currentWeather.getWeatherIcon(this.currentWeatherData.weather[0].description);
        this.humidity = this.currentWeatherData.main.humidity;
        this.tempature = currentWeather.getTemperature(this.currentWeatherData.main.temp);
        this.wind = this.currentWeatherData.wind.speed;
        this.precipitation = this.currentWeatherData.precipitation !== undefined ? this.currentWeatherData.precipitation.value : 'N/A';
    }
  }
};