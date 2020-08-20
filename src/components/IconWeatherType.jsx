import React from "react";

function IconWeatherType(props) {
  // rotation style properties
  const rotate = {
    animation: " rotation 7s infinite linear",
  };
  // horizontal rotation properties
  const spinHorizontal = {
    MozAnimation: "spinHorizontal 5s infinite linear",
    OAnimation: "spinHorizontal 5s infinite linear",
    WebKitAnimation: "spinHorizontal 5s infinite linear",
    animation: "spinHorizontal 5s infinite linear",
  };
  // scale the weather condition paragraph
  const scaleUpDown = {
  
    animation: "crescendo 1.5s alternate infinite ease-in",
  };
  const weatherCondition = props.weatherCondition;

  return (
    <div className="weather-type">
      <img
        className="weather-icon"
        // check if the weatherCondition is sunny and apply styles on this condition
        style={weatherCondition === "Sunny" ? rotate : spinHorizontal}
        src={props.icon}
      />
      <p className="weather-condition" style={scaleUpDown}>
        {props.weatherCondition}
      </p>
    </div>
  );
}
export default IconWeatherType;
