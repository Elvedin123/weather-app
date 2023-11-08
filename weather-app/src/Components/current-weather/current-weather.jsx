import React from "react";

const Currentweather = () => {
  return (
    <div className='"current-weather-container'>
      <div className="current-weather">
        <div className="weather-location">
          <p>Berlin</p>
        </div>
        <div className="current-temp">
          <h1>30˚C</h1>
        </div>
        <div className="current-description">
          <p>Clouds</p>
        </div>
      </div>

      <div className="details">
        <div className="current-feels">
          <p>33˚C</p>
        </div>
        <div className="current-humidity">
          <p>10%</p>
        </div>
        <div className="current-wind">
          <p>5 MPH</p>
        </div>
      </div>
    </div>
  );
};

export default Currentweather;
