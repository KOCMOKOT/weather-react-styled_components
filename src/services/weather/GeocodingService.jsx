const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct?q=";

export default async function fetchCoordinates(city) {
    try {

        const response = await fetch(`${GEO_URL}${city}&limit=1&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
    catch (error) {
        console.log("Error with geo response: ", error);
        throw error;
    }
}

