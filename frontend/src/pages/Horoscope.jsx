import HoroscopeForm from "../chartform";
import HoroscopeResult from "../HoroscopeResult";
import { useState } from "react";

export default function Horoscope() {
  const [horoscope, setHoroscope] = useState(null);
  const [selectedSign, setSelectedSign] = useState("");

  return (
    <>
      {!horoscope && (
        <HoroscopeForm
          setHoroscope={setHoroscope}
          setSelectedSign={setSelectedSign}
          selectedSign={selectedSign}
        />
      )}
      {horoscope && (
        <HoroscopeResult selectedSign={selectedSign} horoscope={horoscope} />
      )}
    </>
  );
}
