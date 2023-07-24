/* eslint-disable */
import React, { useState } from "react";
import horoscopeData from "./assets/horoscope.json";

function HoroscopeForm({ setHoroscope, selectedSign, setSelectedSign }) {
  const [selectedDay, setSelectedDay] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedHoroscope = horoscopeData[selectedSign][selectedDay];

    setHoroscope(selectedHoroscope);
  };

  return (
    <div className="justify-center max-w-md p-8 mx-auto mt-10 rounded-lg shadow-md card-body">
      <h1 className="max-w-md p-8 mx-auto mt-10 text-xl font-bold card-title ">
        Let's check our Horoscope
      </h1>
      <form className="card-body" onSubmit={handleSubmit}>
        <select
          className="w-full max-w-xs mb-10 select select-primary"
          onChange={(event) => setSelectedSign(event.target.value)}
        >
          <option>Select your Star Sign</option>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
        <br />
        <select
          value={selectedDay}
          onChange={(event) => setSelectedDay(event.target.value)}
          className="w-full max-w-xs mb-10 select select-accent"
        >
          <option value=""> Select Day</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
        </select>
        <br />
        <button className="btn btn-primary" type="submit">
          Get Horoscope
        </button>
      </form>
    </div>
  );
}

export default HoroscopeForm;
