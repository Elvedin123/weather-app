import Forecast from "../Forecast/Forecast";

const WeatherContainer = () => {
  return (
    <div className="weather-container">
      <div className="weather">
        <div className="weather-location">
          <p>Berlin</p>
        </div>
        <div className="weather-temp">
          <h1>30˚C</h1>
        </div>
        <div className="weather-description">
          <p>Clouds</p>
        </div>
      </div>
      <div className="details"></div>
      <Forecast />
    </div>
  );
};

export default WeatherContainer;
