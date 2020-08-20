import React, { useState } from "react";
import InputData from "./InputData.jsx";
import CityDate from "./CityDate.jsx";
import Weather from "./Weather.jsx";
import Header from "./Header.jsx";
import IconWeatherType from "./IconWeatherType";
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
      `https://api.weatherapi.com/v1/forecast.json?key=2581791d99f34ca0bc260840202008&q=${cityInput}&days=7`
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
      <Header  />
      <IconWeatherType 
        icon={currentIcon}
        weatherCondition={weatherCondition}
        buttonClicked={isButtonClick}
      />
      <InputData API={getWeather} />
      <CityDate city={currentCity} date={date} buttonClicked={isButtonClick} />
      <Weather
        buttonClicked={isButtonClick}
        weather={currentWeather}
        feelsLike={feelsLike}
      />
    </div>
  );
}
export default App;
