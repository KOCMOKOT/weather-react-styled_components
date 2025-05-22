const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const ONE_CALL_URL = "https://api.openweathermap.org/data/2.5/weather?";

export async function fetchCurrentWeatherByCoordinates(lat, lon) {
    try {
        const response = await fetch(`${ONE_CALL_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
    catch (error) {
        console.log("Error with current weather response: ", error);
        throw error;
    }
}