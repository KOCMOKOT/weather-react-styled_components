import {createContext, useEffect} from "react";
import {useReducer} from "react";
import {getCurrentWeatherByCity, getWeatherForecastByCity} from "../../services/weather/weatherService.jsx";

export const WeatherContext = createContext(null);

const initialState = {
    city: null,
    weatherData: {
        current: null,
        forecast: null,
    },
    error: null,
}

function weatherReducer(state, action) {
    switch (action.type) {
        case "SET_CITY":
            return { ...state, city: action.payload, error: null };
        case "SET_WEATHER":
            return { ...state, weatherData: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export function WeatherProvider({ children }) {
    const [state, dispatch] = useReducer(weatherReducer, initialState);

    // City initialization
    useEffect(() => {
        if (!state.city) {
            dispatch({ type: "SET_CITY", payload: "Minsk" });
        }
    }, [state.city]);

    // Change city effect
    useEffect(() => {
        if (!state.city) return;

        const fetchWeather = async () => {
            try {
                const current = await getCurrentWeatherByCity(state.city);
                const forecast = await getWeatherForecastByCity(state.city);
                dispatch({type: "SET_WEATHER", payload: {current, forecast}});
            } catch (e) {
                dispatch({type: "SET_ERROR", payload: "Cant find city or net error"})
            }
        };

        fetchWeather();
    }, [state.city]);

    return (
        <WeatherContext.Provider value={{state, dispatch}}>
            {children}
        </WeatherContext.Provider>
    );
}