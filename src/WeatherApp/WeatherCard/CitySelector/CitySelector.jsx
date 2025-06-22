import {
    CitySelector__Button,
    CitySelector__Container,
    CitySelector__Input,
    CitySelector__Dropdown,
    CitySelector__DropdownItem,
} from './CitySelector.styles.js';
import {useWeather} from "../../../context/weather/useWeatherData.jsx";
import {useEffect, useState} from "react";

const cities = ["Minsk", "Brest", "Grodno", "Vitebsk", "Gomel", "Mogilev"];

export default function CitySelector() {
    const {state, dispatch} = useWeather();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(state.city || "");

    useEffect(() => {
        setInputValue(state.city);
    }, [state.city]);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    }

    const handleSelectCity = (city) => {
        dispatch({type: "SET_CITY", payload: city});
        setInputValue(city);
        setIsOpen(false);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            dispatch({type: "SET_CITY", payload: inputValue});
            setIsOpen(false);
        }
    }

    return (
        <CitySelector__Container>
            <CitySelector__Input
                    type="text"
                    value={state.error || inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Input City"
            />
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