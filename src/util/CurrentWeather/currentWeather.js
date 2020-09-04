import apiKey from "../../../variables";

const currentWeatherFactory = function () {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/';
    const weatherUrl = 'weather?q=';
    const weatherRequestUrl = baseUrl + weatherUrl
    const appId = '&appid=' + apiKey;

    async function getCurrentWeatherDataByCity(requestedCity) {
        requestedCity = 'Chula Vista';
        const requestUrl = weatherRequestUrl + requestedCity + appId
        const response = await fetch(requestUrl, {mode: 'cors'});
        const weatherData = await response.json();
        console.table(weatherData);
    }

    return {
       getCurrentWeatherDataByCity,
    }
}

export default currentWeatherFactory;