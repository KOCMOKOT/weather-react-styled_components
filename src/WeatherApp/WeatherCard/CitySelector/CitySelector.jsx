import {
    CitySelector__Button,
    CitySelector__Container,
    CitySelector__Label,
    CitySelector__Dropdown,
    CitySelector__DropdownItem,
} from './CitySelector.styles.js';
import {useWeather} from "../../../context/weather/useWeatherData.jsx";
import {useState} from "react";

const cities = ["Minsk", "Brest", "Grodno", "Vitebsk", "Gomel", "Mogilev"];

export default function CitySelector() {
    const {state, dispatch} = useWeather();
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    }

    const handleSelectCity = (city) => {
        dispatch({type: "SET_CITY", payload: city});
        setIsOpen(false);
    }

    return (
        <CitySelector__Container>
            <CitySelector__Label>{state.city}</CitySelector__Label>
            <CitySelector__Button onClick={handleToggle}>▼</CitySelector__Button>

            {isOpen && (
                <CitySelector__Dropdown>
                    {cities.map((city) => (
                        <CitySelector__DropdownItem key={city} onClick={() => handleSelectCity(city)}>
                            {city}
                        </CitySelector__DropdownItem>
                    ))}
                </CitySelector__Dropdown>
            )}
        </CitySelector__Container>
    );
}