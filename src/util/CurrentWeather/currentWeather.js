import apiKey from "../../../variables";
import ClearSky from '../../assets/day/01d.png';
import FewClouds from '../../assets/day/02d@2x.png';
import ScatteredClouds from '../../assets/night/03n@2x.png';
import BrokenClouds from '../../assets/day/04d@2x.png';
import ShowerRain from '../../assets/day/09d@2x.png';
import Rain from '../../assets/day/10d@2x.png';
import ThunderStorm from '../../assets/day/11d@2x.png';
import Snow from '../../assets/day/13d@2x.png';
import Mist from '../../assets/day/50d@2x.png';



const currentWeatherFactory = function () {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/';
    const weatherUrl = 'weather?q=';
    const weatherRequestUrl = baseUrl + weatherUrl
    const appId = '&appid=' + apiKey;


    async function getCurrentWeatherDataByCity(requestedCity) {
        console.log('Inside getCurrentWeatherDataByCity()');

        const requestUrl = weatherRequestUrl + requestedCity + appId;
        const response = await fetch(requestUrl, { mode: 'cors' });
        const weatherData = await response.json();
        return weatherData;
    }


    async function processCurrentWeatherData(requestedCity) {
        const currentWeatherData = await getCurrentWeatherDataByCity(requestedCity);
        console.table(currentWeatherData);
        console.log({currentWeatherData})

        if (currentWeatherData.cod === "404") {
            // window.alert("City Not Found");
            console.log("City Not Found");
            return 1;
        } else {
            return currentWeatherData;
        }
    }

    function getTemperature(kelvinTemperature) {
        const fahrenheit = Math.trunc((9/5) * (kelvinTemperature - 273.15) + 32);
        const celsius = Math.trunc(kelvinTemperature - 273.15);

        return [fahrenheit, celsius];
    }

    function getDayOfWeek() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayIndex = new Date().getDay();
        return days[dayIndex];
    }

    function getCurrentTime() {
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();

        // Check whether AM or PM
        const newFormat = hours >= 12 ? 'PM' : 'AM';

        // Find current hour in AM-PM format
        hours = hours % 12;

        // To display "0" as "12"
        hours = hours ? hours : 12;

        // To display minutes below 10 as 09, 08, 07...
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return hours + ':' + minutes + ' ' + newFormat;
    }

    function toUpper(str) {
        return str
            .toLowerCase()
            .split(' ')
            .map( function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
    }

    function getWeatherIcon(weatherDescription) {
        console.log('What is weatherDes:: ' + weatherDescription)


        if (weatherDescription === 'clear sky') {
            return ClearSky;
        }
        else if (weatherDescription === 'few clouds') {
            return FewClouds;
        }
        else if (weatherDescription === 'scattered clouds') {
            console.log('There is scattered cloud');
            return ScatteredClouds;
        }
        else if (weatherDescription === 'broken clouds') {
            return BrokenClouds;
        }
        else if (weatherDescription === 'shower rain') {
            return ShowerRain;
        }
        else if (weatherDescription === 'rain') {
            return Rain;
        }
        else if (weatherDescription === 'thunderstorm') {
            return ThunderStorm;
        }
        else if (weatherDescription === 'snow') {
            return Snow;
        }
        else if (weatherDescription === 'mist') {
            return Mist;
        }
    }

    return {
        processCurrentWeatherData,
        getDayOfWeek,
        getCurrentTime,
        toUpper,
        getWeatherIcon,
        getTemperature
    }
}

export default currentWeatherFactory;