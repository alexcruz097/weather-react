import React, { useState } from "react";
import InputData from "./InputData.jsx";
import CityDate from "./CityDate.jsx";
import Weather from "./Weather.jsx";
import Header from "./Header.jsx";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [feelsLike, setFeelsLike] = useState();
  const [currentWeather, setCurrrentWeather] = useState();
  const [currentIcon, setCurrentIcon] = useState();
  const [weatherCondition, setWeatherCondition] = useState();
// this variable will take care if the button has been cliked to show the icons
  const [isButtonClick, setIsButtonClick] = useState(false);
  // get current date from the city
  const [date, setDate] = useState();

  

  //function to fetch the api
  const getWeather = (cityInput) => {
    // Change the state of the button
    setIsButtonClick(true);
    //set the current city from the input when the button is cliked
    setCurrentCity(cityInput);
    return fetch(
      `http://api.weatherapi.com/v1/current.json?key=0ba02e1aa5bf4ccd8de35307203107&q=${cityInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        // set the data
        console.log(data);
        setCurrentIcon(data.current.condition.icon);
        setWeatherCondition(data.current.condition.text);
        setFeelsLike(data.current.feelslike_f);
        setCurrrentWeather(data.current.temp_f);
        // set the date by using the localEpoch
        let time = new Date(data.location.localtime);
        setDate(time.toLocaleString());
      })
      .catch((err) => {
        alert("please input a correct city name");
        setCurrentCity("");
        setCurrentIcon("");
        setWeatherCondition("");
        setFeelsLike("");
        setCurrrentWeather("");
      });
  };

  return (
    <div className="weather-app">
      <Header icon={currentIcon} weatherCondition={weatherCondition} />
      <InputData API={getWeather} />
      <CityDate city={currentCity} date={date} buttonClicked={isButtonClick} />

      <Weather
        weather={currentWeather}
        feelsLike={feelsLike}
        buttonClicked={isButtonClick}

      />
    </div>
  );
}
export default App;
