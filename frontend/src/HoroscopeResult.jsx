import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function HoroscopeResult({ selectedSign, horoscope }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(0);
  };

  return (
    <div className="grid max-w-md grid-cols-1 gap-8 mx-auto my-auto rounded-lg md:mt-12 md:grid-cols-2 bg-base-100">
      <div className="px-2 mt-5 text-center">
        <p>
          Date Range: <br /> {horoscope.date_range}
        </p>

        <h1 className="font-bold capitalize">{selectedSign}</h1>
        <figure className="mt-2 px-14 md:px-0 md:mt-16">
          <img src={`/signs/${selectedSign}.png`} alt={selectedSign} />
        </figure>
      </div>
      <div className="px-6 text-center md:px-0 md:my-5 ">
        <p className="px-2">Compatibility: {horoscope.compatibility}</p>
        <p>Lucky Number: {horoscope.lucky_number}</p>
        <p>Lucky Time: {horoscope.lucky_time}</p>
        <p>Color: {horoscope.color}</p>
        <p>Mood: {horoscope.mood}</p>
        <p>Description: {horoscope.description}</p>
        <button onClick={goBack} className="w-full mt-4 btn btn-primary">
          <NavLink to="/horoscope">Go back</NavLink>
        </button>
      </div>
    </div>
  );
}

HoroscopeResult.propTypes = {
  selectedSign: PropTypes.string.isRequired,
  horoscope: PropTypes.shape({
    date_range: PropTypes.string.isRequired,
    compatibility: PropTypes.string.isRequired,
    lucky_number: PropTypes.string.isRequired,
    lucky_time: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    mood: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
