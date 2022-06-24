import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({
  name,
  main,
  description,
  min,
  max,
  wind,
  temp,
  pic,
  humidity,
  lat,
  long,
}) {
  return (
    <div class="carta">
      <div id="weather_wrapper">
        <div class="weatherCard">
          <div class="currentTemp">
            <span class="temp">{temp.toFixed(1)} C&deg;</span>
            <span class="location">{name}</span>
            <p>{main}</p>
            <p>•{description}</p>
          </div>
          <div class="currentWeather">
            <span class="conditions">
              <img
                src={`http://openweathermap.org/img/wn/${pic}@2x.png`}
                alt=""
                height="100"
                width="100"
              />
            </span>
            <div class="info">
              <span class="rain">{humidity}%</span>

              <span class="wind">{wind} m/s</span>
            </div>
          </div>
        </div>
      </div>
      <iframe
        class="iframe"
        title="map"
        src={`https://maps.google.com/?ll=${lat},${long}&z=14&t=h&output=embed`}
        height="400"
        width="400"
        frameborder="0"
        allowfullscreen
      ></iframe>

    </div>
  );
}
