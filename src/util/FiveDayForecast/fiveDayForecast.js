import apiKey from "../../../variables";

const fiveDayForecastFactory = function () {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/';
    const forecastUrl = 'forecast?q=';
    const weatherRequestUrl = baseUrl + forecastUrl;
    const appId = '&appid=' + apiKey;

    async function getFiveDayForecastByCity(requestedCity) {
        requestedCity = 'Chula Vista';
        const requestUrl = weatherRequestUrl + requestedCity + appId
        const response = await fetch(requestUrl, {mode: 'cors'});
        const weatherData = await response.json();
        console.table(weatherData);
    }

    return {
        getFiveDayForecastByCity,
    }
}

export default fiveDayForecastFactory;