import React from "react";
import FaceIcon from '@material-ui/icons/Face';
function Header(props) {


  return (
    <nav className="main-nav">
      <ul className="links">
        <li className="logo-name"><FaceIcon fontSize="medium"/> Alex Cruz</li>
        <li className="title">Weather App</li>
      </ul>
    </nav>
  )
}

export default Header;
