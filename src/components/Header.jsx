import React from "react";

function Header(props) {
  const rotate = {
   animation:" rotation 7s infinite linear"
  }
  const spinHorizontal = {
      MozAnimation: "spinHorizontal 5s infinite linear",
    OAnimation: "spinHorizontal 5s infinite linear",  
    WebKitAnimation: "spinHorizontal 5s infinite linear",
    animation: "spinHorizontal 5s infinite linear"
  }
  const weatherCondition = props.weatherCondition;
  console.log(weatherCondition)
  return (
    <nav className="main-nav">
      <ul className="links">
        <li className="logo-name">Alex Cruz</li>
        <li>
          <img
            className="weather-icon"
            style={weatherCondition ==="Sunny"?rotate:spinHorizontal}
            src={props.icon}
          />
          <p className="weather-type">{props.weatherCondition}</p>
        </li>
        <li className="title">Weather App</li>
      </ul>
    </nav>
  );
}

export default Header;
