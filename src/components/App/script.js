import CurrentWeatherComponent from '../CurrentWeather';
import FooterComponent from '../Footer';
import NavBarComponent from '../NavBar';
import WeatherLayoutComponent from '../WeatherLayout';

export default {
  name: 'App',
  components: {
    'NavBarComponent': NavBarComponent,
    'CurrentWeatherComponent': CurrentWeatherComponent,
    'FooterComponent': FooterComponent,
    'WeatherLayoutComponent': WeatherLayoutComponent,
  },
  data() {
    return {};
  },
};
