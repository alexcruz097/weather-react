import React, { useState } from "react";

function Weather(props) {
  return (
    <div className="current-weather">
      <p className="current-degree">
              <span> {props.weather} deg</span>{" "}
      </p>
      <p className="feels-degree">
              Feels Like <span>{props.feelsLike}deg</span>
      </p>
          <p className="weather-type">{props.weatherCondition}</p>
    </div>
  );
}

export default Weather;
