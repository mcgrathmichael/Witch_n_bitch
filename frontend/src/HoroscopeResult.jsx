import { NavLink, useNavigate } from "react-router-dom";

export default function HoroscopeResult({ selectedSign, horoscope }) {
  // const signImages = {
  //   aries: aries,
  //   taurus: taurus,
  //   gemini: gemini,
  //   cancer: cancer,
  //   leo: leo,
  //   virgo: virgo,
  //   libra: libra,
  //   scorpio: scorpio,
  //   sagittarius: sagittarius,
  //   capricorn: capricorn,
  //   aquarius: aquarius,
  //   pisces: pisces,
  // };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(0);
  };
  // const signImage = selectedSign ? signImages[selectedSign] : null;

  return (
    <div>
      <div className="card max-w-md mx-auto p-6  rounded-lg bg-base-100">
        <div className="card-body items-center text-center">
          <h1 className="capitalize">{selectedSign}</h1>
          <figure className="">
            <img src={`/signs/${selectedSign}.png`} alt={selectedSign} />
          </figure>
          <p className="pt-6 font-bold">
            Compatibility: {horoscope.compatibility}
          </p>
          <p>Lucky Number: {horoscope.lucky_number}</p>
          <p>Lucky Time: {horoscope.lucky_time}</p>
          <p>Color: {horoscope.color}</p>
          <p>Date Range: {horoscope.date_range}</p>
          <p>Mood: {horoscope.mood}</p>
          <p>Description: {horoscope.description}</p>
          <button onClick={goBack} className="btn w-full btn-primary">
            <NavLink to="/horoscope">Go back</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
