import apiKey from "../../../variables";

const currentWeatherFactory = function () {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/';
    const weatherUrl = 'weather?q=';
    const weatherRequestUrl = baseUrl + weatherUrl
    const appId = '&appid=' + apiKey;

    async function getCurrentWeatherDataByCity(requestedCity) {
        console.log('Inside getCurrentWeatherDataByCity()');
        requestedCity = 'Calexico';
        const requestUrl = weatherRequestUrl + requestedCity + appId;
        const response = await fetch(requestUrl, {mode: 'cors'});
        // console.log('What is response::');
        // console.table(response);
        const weatherData = await response.json();
        // console.log('What is weatherData');
        console.table(weatherData);
        return weatherData;
    }

    return {
       getCurrentWeatherDataByCity,
    }
}

export default currentWeatherFactory;