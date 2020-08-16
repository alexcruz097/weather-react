import React from "react";

function Header(props) {
  return (

    <nav className="main-nav">
      <ul className="links">
        <li className="logo-name">Alex Cruz</li>
        <li className="weather-icon">
          <img src={props.icon} />
        </li>
        <li className="title">Weather App</li>
      </ul>
      </nav>
     
 
  );
}

export default Header;
