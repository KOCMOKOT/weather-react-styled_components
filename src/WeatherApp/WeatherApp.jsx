import {Fragment} from "react";
import GlobalStyles from "../GlobalStyles";
import {WeatherApp__Container} from "./WeatherApp.styles.js";
import ToastMessage from "../utils/components/ToastMessage/index.jsx";
import WeatherCard from "./WeatherCard/index.jsx";
import {WeatherProvider} from "../context/weather/WeatherContext.jsx";
import {useCurrentWeatherName, useWeather} from "../context/weather/useWeatherData.jsx";

function WeatherAppInner() {
   const { state, dispatch } = useWeather();
   return (
       <WeatherApp__Container weather={useCurrentWeatherName()}>
           <WeatherCard />
           <ToastMessage
               message={state.error}
               onClose={() => {
                   dispatch({ type: "SET_ERROR", payload: null });
                   dispatch({ type: "SET_CITY", payload: "Minsk" });
               }}
           />
       </WeatherApp__Container>

   );
}

export default function WeatherApp() {
    return (
        <Fragment>
            <GlobalStyles />
            <WeatherProvider>
                <WeatherAppInner />
            </WeatherProvider>
        </Fragment>
    );
}