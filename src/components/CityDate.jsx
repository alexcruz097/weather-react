import React, { useState } from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import UpdateIcon from "@material-ui/icons/Update";
function CityDate(props) {
  const isClicked = props.buttonClicked;
  return (
    <div className="location-container">
      <span className="city-icon">{isClicked ? <LocationCityIcon fontSize="small" /> : null}</span> 
      <h1 className="city">{props.city}</h1>
      <span className="time-icon">{isClicked ? <UpdateIcon fontSize="small" /> : null}</span>
      <p className="date">{props.date}</p>
    </div>
  );
}

export default CityDate;
