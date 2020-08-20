import React, { useState } from "react";


function Weather(props) {
  const clicked = props.buttonClicked;

  return (
    <div className="current-weather">
      <p className="current-degree">
        <span>
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
    </div>
  );
}

export default Weather;
