import {
    WeatherCard__Container,
    WeatherCard_Item,
} from "./WeatherCard.styles.js";
import CitySelector from './CitySelector/index.jsx';
import TodayWeather from './TodayWeather/index.jsx';
import FutureWeather from './FutureWeather/index.jsx';

export default function WeatherCard() {
    return (
        <WeatherCard__Container>
            <CitySelector />
            <WeatherCard_Item $variant='second'>
                <TodayWeather />
            </WeatherCard_Item>
            <WeatherCard_Item $variant='third'>
                <FutureWeather />
            </WeatherCard_Item>
        </WeatherCard__Container>
    );
}