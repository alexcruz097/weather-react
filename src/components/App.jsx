import React, { useState, useEffect } from "react";
import InputData from "./InputData.jsx";
import CityDate from "./CityDate.jsx";
import Weather from "./Weather.jsx";
import Header from "./Header.jsx";
function App() {
  // call the api
  const [currentCity, setCurrentCity] = useState("");
  const [feelsLike, setFeelsLike] = useState();
  const [currentWeather, setCurrrentWeather] = useState();
  const [currentIcon, setCurrentIcon] = useState();
  const [weatherCondition, setWeatherCondition] = useState();
  const [localEpoch, setLocalEpoch] = useState();
  // get current date from the city
  const [date, setDate] = useState()


  // const getWeather = async (cityInput) => {
  //   setCurrentCity(cityInput);
  //   const response = await fetch(
  //     `http://api.weatherapi.com/v1/current.json?key=0ba02e1aa5bf4ccd8de35307203107&q=${cityInput}`
  //   );
  //   const data = await response.json();
  //   setAPIdata(data);

  // };
  // getWeather().then(() =>
  // {
  //   console.log(apiData.current);
  // })
  const getWeather = (cityInput) => {
    setCurrentCity(cityInput);
    return fetch(
      `http://api.weatherapi.com/v1/current.json?key=0ba02e1aa5bf4ccd8de35307203107&q=${cityInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        // set the data
       console.log(data)
        setLocalEpoch(data.location.localtime_epoch);
        setCurrentIcon(data.current.condition.icon);
        setWeatherCondition(data.current.condition.text);
        setFeelsLike(data.current.feelslike_f);
        setCurrrentWeather(data.current.temp_f);
      })
      .catch((err)=>alert("please input a correct city name"));
  };

  return (
    <div className="weather-app">
      <Header icon={currentIcon} />
      <InputData API={getWeather} />
      <CityDate city={currentCity} date={date} />
      <Weather
        weather={currentWeather}
        feelsLike={feelsLike}
        weatherCondition={weatherCondition}
      />
    </div>
  );
}
export default App;
