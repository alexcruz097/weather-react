import React, { useState } from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";
// import LocationCityIcon from @material-ui/icons/LocationCity";
function Weather(props) {
  const clicked = props.buttonClicked;

  return (
    <div className="current-weather">
      <p className="current-degree">
        <span>
          {/* <LocationCityIcon /> */}
          {props.weather}
          {clicked ? "\u00b0" : null}
        </span>{" "}
      </p>
      <p className="feels-degree">
        {clicked ? "Feels like " : null}
        <span>
          {props.feelsLike} {clicked ? "\u00b0" : null}
        </span>
      </p>
      <p className="weather-type">{props.weatherCondition}</p>
    </div>
  );
}

export default Weather;
