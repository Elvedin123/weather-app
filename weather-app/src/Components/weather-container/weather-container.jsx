import Forecast from "../Forecast/Forecast";
import "./current-weather.css";
import Currentweather from "../current-weather/current-weather";

const WeatherContainer = () => {
  return (
    <div className="weather-container">
      <Currentweather />
      <Forecast />
    </div>
  );
};

export default WeatherContainer;
