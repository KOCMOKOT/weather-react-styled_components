import {Fragment} from "react";
import GlobalStyles from "../GlobalStyles";
import {WeatherApp__Container} from "./WeatherApp.styles.js";
import WeatherCard from "./WeatherCard/index.jsx";
import {WeatherProvider} from "../context/weather/WeatherContext.jsx";
import {useCurrentWeatherName} from "../context/weather/useWeatherData.jsx";

function WeatherAppInner() {
   return (
       <WeatherApp__Container weather={useCurrentWeatherName()}>
           <WeatherCard />
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