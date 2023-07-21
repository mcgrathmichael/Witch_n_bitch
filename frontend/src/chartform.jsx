import React, { useState } from "react";
import horoscopeData from "../src/assets/horoscope.json";

function HoroscopeForm({ setHoroscope, selectedSign, setSelectedSign }) {
  // const [selectedSign, setSelectedSign] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve the horoscope based on the selected sign and day
    const selectedHoroscope = horoscopeData[selectedSign][selectedDay];

    // Set the horoscope state
    setHoroscope(selectedHoroscope);
  };

  return (
    <div className="card-body max-w-md mx-auto p-8 mt-10 rounded-lg shadow-md">
      <h1 className="font-bold max-w-md mx-auto p-8 mt-10 text-xl">
        Let's check our Horoscope
      </h1>
      <form onSubmit={handleSubmit}>
        <select
          className="select select-primary mb-10 w-full max-w-xs"
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
          className="select mb-10 select-accent w-full max-w-xs"
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
