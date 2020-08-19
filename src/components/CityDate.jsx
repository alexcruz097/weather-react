import React, { useState } from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import UpdateIcon from "@material-ui/icons/Update";
function CityDate(props) {
const isClicked = props.buttonClicked;
  return (
    <div className="location-container">
      {isClicked ? <LocationCityIcon fontSize="large" />  : null}{" "}
      <h1 className="city">{props.city}</h1>
      {isClicked ? <UpdateIcon fontSize="large" /> : null}{" "}
      <p className="date">{props.date}</p>
    </div>
  );
}

export default CityDate;
