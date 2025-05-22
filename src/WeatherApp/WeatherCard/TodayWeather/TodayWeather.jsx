import {
    TodayWeather__Container,
    TodayWeather__Temperature,
    TodayWeather__Weather
} from "./TodayWeather.styles.js";
import {useCurrentWeatherData} from "../../../context/weather/useWeatherData.jsx";

export default function TodayWeather() {
    const {temp, weatherName} = useCurrentWeatherData();
    return (
        <TodayWeather__Container>
            <TodayWeather__Temperature>{temp + "°C"}</TodayWeather__Temperature>
            <TodayWeather__Weather>{weatherName}</TodayWeather__Weather>
        </TodayWeather__Container>
    );
}