import React from "react";

function Header(props) {
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
     width: "100px",
  height: "100px",
  animation: "crescendo 1.5s alternate infinite ease-in"
  }
  const weatherCondition = props.weatherCondition;
  console.log(weatherCondition);
  return (
    <nav className="main-nav">
      <ul className="links">
        <li className="logo-name">Alex Cruz</li>
        <li>
          <img
            className="weather-icon"
            // check if the weatherCondition is sunny and apply styles on this condition
            style={weatherCondition === "Sunny" ? rotate : spinHorizontal}
            src={props.icon}
          />
          <p className="weather-type" style={scaleUpDown}>
            {props.weatherCondition}
          </p>
        </li>
        <li className="title">Weather App</li>
      </ul>
    </nav>
  );
}

export default Header;
