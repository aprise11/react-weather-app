import React from "react";
import Footer from "./Footer";

import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Cape Town",
    temperature: 20,
    date: "Monday 10:00",
    description: "Cloudy",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png",
    humidity: 84,
    wind: 10,
  };

  let form = (
    <form className="mb-2">
      <div className="row search-city">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control search-input"
          />
        </div>
        <div className="col-3 p-0">
          <input type="submit" className="btn btn-light" value="Search" />
        </div>
      </div>
    </form>
  );
  return (
    <div className="Weather">
      {form}
      <div className="row city-content">
        <div className="col-12">
          <h1>{weatherData.city}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 todays-temperature-container">
          <span className="current-temp">{weatherData.temperature}</span>
          <span className="units">
            <a href="/" className="active">
              °C
            </a>
            <a href="/" className="fahrenheit">
              °F
            </a>
          </span>
        </div>
      </div>
      <div className="row info">
        <div className="col-6">
          <img src={weatherData.imgUrl} className="main-icon" alt="Clear sky" />
        </div>
        <div className="col-6">
          <ul>
            <li className="date">{weatherData.date}</li>
            <li className="condition">{weatherData.description}</li>
            <li className="humidity-wind">Humidity: {weatherData.humidity}%</li>
            <li className="humidity-wind">Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
