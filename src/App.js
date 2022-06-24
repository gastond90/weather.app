import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Cards";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div>
      <div>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
          class="search"
        />
      </div>

      <div class="grid">
        {data.weather !== undefined && (
          <Card
            name={data?.name}
            main={data?.weather[0]?.main}
            description={data?.weather[0]?.description}
            pic={data?.weather[0]?.icon}
            temp={data?.main?.temp}
            min={data?.main?.temp_min}
            max={data?.main?.temp_max}
            wind={data.wind.speed}
            humidity={data.main?.humidity}
            lat={data?.coord.lat}
            long={data?.coord.lon}
          />
        )}
      </div>
    </div>
  );
}
