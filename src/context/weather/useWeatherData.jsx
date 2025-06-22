import {useContext} from "react";
import {WeatherContext} from "./WeatherContext.jsx";

export const useWeather = () => useContext(WeatherContext);

export function useCity() {
    const {state} = useContext(WeatherContext);
    return state.city;
}

export function useCurrentWeatherData() {
    const { state } = useContext(WeatherContext);
    const current = state.weatherData.current;

    if (!current) return {
        isLoading: true,
        data: null,
    };

    return {
        isLoading: false,
        data: {
            temp: Math.round(current.main.temp),
            weatherName: current.weather[0].main,
        }
    };
}

export function useCurrentWeatherName() {
    const {state} = useContext(WeatherContext);
    if (!state.city || !state.weatherData.current) {
        return "Loading"
    }

    return state.weatherData.current.weather[0].main;
}

export function useWeatherForecastData() {
    const {state} = useContext(WeatherContext);
    if (!state.weatherData.forecast) return {
        isLoading: true,
        list: null,
    }

    const list = state.weatherData.forecast.list;
    let nextDayIndex = list.findIndex((element) => element.dt_txt.includes("00:00:00"));
    return {
        isLoading: false,
        list: [
            list[nextDayIndex + 4],
            list[nextDayIndex + 12],
            list[nextDayIndex + 20],
            list[nextDayIndex + 28],
            list.at(-1),
        ],
    }
}

export function useWeatherForecastDataByDay(dayNum) {
    const {isLoading, list} = useWeatherForecastData();
    if (isLoading) return {
        isLoading: true,
        data: null,
    }

    const dayData = list[dayNum];
    return {
        isLoading: false,
        data: {
            temp: Math.round(dayData.main.temp),
            weatherIcon: dayData.weather[0].icon,
            time: dayData.dt,
        },
    }
}