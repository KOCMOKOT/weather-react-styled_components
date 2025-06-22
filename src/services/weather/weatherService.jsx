import fetchCoordinates from "./GeocodingService.jsx";
import {fetchCurrentWeatherByCoordinates} from "./CurrentWeatherService.jsx";
import fetchWeatherForecastByCoordinates from "./WeatherForecastService.jsx";

export async function getWeatherByCity(fetchFn, city) {
    const geo = await fetchCoordinates(city);
    const location = geo[0];
    return await fetchFn(location.lat, location.lon);
}

export async function getCurrentWeatherByCity(city){
    return await getWeatherByCity(fetchCurrentWeatherByCoordinates, city);
}

export async function getWeatherForecastByCity(city) {
    return await getWeatherByCity(fetchWeatherForecastByCoordinates, city);
}