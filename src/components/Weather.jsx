import React from "react";


function Weather(props) {
  const clicked = props.buttonClicked;
console.log(clicked)
  return (
    <div className="current-weather">
      <p className="current-degree">
        <span>
          {props.weather}
          {clicked ? "\u00b0" : null}
        </span>
      </p>
      <p className="feels-degree">
        <span className="feelsLike-text">{clicked ? "Feels like " : null}</span>
        <p>{props.feelsLike} {clicked ? "\u00b0" : null}
        </p>
      </p>
    </div>
  );
}

export default Weather;
