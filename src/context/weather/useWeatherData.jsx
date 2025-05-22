import {useContext} from "react";
import {WeatherContext} from "./WeatherContext.jsx";

export const useWeather = () => useContext(WeatherContext);

export function useCity() {
    const {state} = useContext(WeatherContext);
    return state.city;
}

export function useCurrentWeatherData() {
    const {state} = useContext(WeatherContext);
    return {
        temp: Math.round(state.weatherData.current.main.temp),
        weatherName: state.weatherData.current.weather[0].main,
    };
}

export function useCurrentWeatherName() {
    const {state} = useContext(WeatherContext);
    return state.weatherData.current.weather[0].main;
}

export function useWeatherForecastData() {
    const {state} = useContext(WeatherContext);
    const list = state.weatherData.forecast.list;
    let nextDayIndex = list.findIndex((element) => element.dt_txt.includes("00:00:00"));
    return [
        list[nextDayIndex + 4],
        list[nextDayIndex + 12],
        list[nextDayIndex + 20],
        list[nextDayIndex + 28],
        list.at(-1),
    ];
}

export function useWeatherForecastDataByDay(dayNum) {
    const weatherForecastData = useWeatherForecastData();
    const dayData = weatherForecastData[dayNum];
    return {
        temp: Math.round(dayData.main.temp),
        weatherIcon: dayData.weather[0].icon,
        time: dayData.dt,
    }
}