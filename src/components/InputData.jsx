import React, { useState } from "react";

function InputData(props) {
  const [cityInput, setCityInput] = useState();

  //  get the current city from the input
  function getCurrentCity(event) {
    setCityInput(event.target.value);
  }

  return (
    <form className="form">
      <input
        onChange={getCurrentCity}
        className="city-input"
        name="city"
        placeholder="Please enter your city"
        value={cityInput}
      />
      <button
        onClick={(e) => {
          props.API(cityInput);
          setCityInput("");
          e.preventDefault();
        }}
        className="submit-btn"
        type="submit"
      >
        Enter
      </button>
    </form>
  );
}

export default InputData;
