import {createContext, useEffect} from "react";
import {useReducer} from "react";
import {getCurrentWeatherByCity, getWeatherForecastByCity} from "../../services/weather/weatherService.jsx";

const WeatherContext = createContext(null);

const initialState = {
    city: "Minsk",
    weatherData: {
        current: await getCurrentWeatherByCity("Minsk"),
        forecast: await getWeatherForecastByCity("Minsk"),
    }
}

function weatherReducer(state, action) {
    switch (action.type) {
        case "SET_CITY":
            return { ...state, city: action.payload};
        case "SET_WEATHER":
            return { ...state, weatherData: action.payload };
        default:
            return state;
    }
}

export function WeatherProvider({ children }) {
    const [state, dispatch] = useReducer(weatherReducer, initialState);

    useEffect(() => {
        const fetchWeather = async () => {
            const current = await getCurrentWeatherByCity(state.city);
            const forecast = await getWeatherForecastByCity(state.city);
            dispatch({type: "SET_WEATHER", payload: {current, forecast}});
        };

        fetchWeather().catch((error) => {
            console.error("WeatherProvider error: ", error);
        });
    }, [state.city]);

    return (
        <WeatherContext.Provider value={{state, dispatch}}>
            {children}
        </WeatherContext.Provider>
    );
}