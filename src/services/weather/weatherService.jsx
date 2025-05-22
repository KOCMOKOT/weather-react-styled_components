import fetchCoordinates from "./GeocodingService.jsx";
import {fetchCurrentWeatherByCoordinates} from "./CurrentWeatherService.jsx";
import fetchWeatherForecastByCoordinates from "./WeatherForecastService.jsx";

export async function getWeatherByCity(fetchFn, city) {
    const geo = await fetchCoordinates(city);
    const location = geo[0];
    return await fetchFn(location.lat, location.lon);
}

export const getCurrentWeatherByCity = (city) =>
    getWeatherByCity(fetchCurrentWeatherByCoordinates, city);

export const getWeatherForecastByCity = (city) =>
    getWeatherByCity(fetchWeatherForecastByCoordinates, city);