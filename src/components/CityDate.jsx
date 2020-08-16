import React, { useState } from "react";

function CityDate(props) {

  return (

    <div className="location-container">
      <h1 className="city">{props.city}</h1>
      <p className="date">{props.date}</p>
    </div>
  );
}

export default CityDate;
