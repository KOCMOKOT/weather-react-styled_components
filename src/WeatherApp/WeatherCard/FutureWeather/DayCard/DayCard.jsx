import {
    DayCard__Card,
    DayCard__DayName,
    DayCard__WeatherImg,
    DayCard__Temperature,
} from "./DayCard.styles.js";
import {useWeatherForecastDataByDay} from "../../../../context/weather/useWeatherData.jsx";
import getWeekDayName from "../../../../utils/dateUtils.jsx";

export default function DayCard({dayNumber}) {
    const {isLoading, data} = useWeatherForecastDataByDay(dayNumber);
    if (isLoading) {
        return (
            <DayCard__Card>
                <p>Loading...</p>
            </DayCard__Card>
        );
    }

    const {temp, weatherIcon, time} = data;
    return (
        <DayCard__Card>
            <DayCard__DayName>{getWeekDayName(time * 1000)}</DayCard__DayName>
            <DayCard__WeatherImg src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}/>
            <DayCard__Temperature>{temp + "°C"}</DayCard__Temperature>
        </DayCard__Card>
    );
}