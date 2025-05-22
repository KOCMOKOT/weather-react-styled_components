const API_KEY = "fa884deb3563189167342e48cea28f2d";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast?";

export default async function fetchWeatherForecastByCoordinates(lat, lon) {
    try {
        const response = await fetch(`${FORECAST_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
    catch (error) {
        console.log("Error with weather forecast response: ", error);
        throw error;
    }
}