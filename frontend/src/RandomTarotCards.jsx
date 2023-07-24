/* eslint-disable */
import React, { useState } from "react";
import TarotCard from "./TarotCard";
import tarotData from "./assets/archive/tarot-images.json";

function RandomTarotCards() {
  const [randomCards, setRandomCards] = useState([]);
  const [showCopy, setShowCopy] = useState(true);
  const generateRandomCards = () => {
    const shuffledCards = tarotData.cards.sort(() => 0.5 - Math.random());

    const selectedCards = [];
    let index = 0;

    while (selectedCards.length < 3 && index < shuffledCards.length) {
      const currentCard = shuffledCards[index];

      if (!selectedCards.some((card) => card.number === currentCard.number)) {
        const meaningsType = Math.random() < 0.5 ? "light" : "shadow";
        const randomMeaning =
          currentCard.meanings[meaningsType][
            Math.floor(
              Math.random() * currentCard.meanings[meaningsType].length
            )
          ];

        const randomFortune =
          currentCard.fortune_telling[
            Math.floor(Math.random() * currentCard.fortune_telling.length)
          ];
        selectedCards.push({
          ...currentCard,
          randomQuestion: randomMeaning,
          randomFortune,
        });
      }

      index++;
    }
    setShowCopy(false);
    setRandomCards(selectedCards);
  };

  return (
    <div className="md:p-4 md:card">
      <div className=" md:self-center">
        <div className="gap-4 md:grid md:grid-cols-3">
          {" "}
          {randomCards.map((card) => (
            <TarotCard key={card.number} card={card} />
          ))}
        </div>
      </div>{" "}
      {showCopy && (
        <div className="flex self-center mb-12 rounded-md md:mx-12 card-body bg-primary text-accent">
          <p className="text-sm text-center md:p-4 sm:text-base">
            🔮 Unveil the Veiled - Tarot Daily Spread! 🔮
            <br />
            <br />
            🌟 Ancient Wisdom Awaits: Step into the mystical realm of Tarot,
            where centuries-old wisdom whispers through each card, guiding your
            path. 🌟
            <br />
            <br />
            🌌 Embrace the Unknown: With a single click, unlock the secrets that
            the cosmos has woven into your destiny. Unravel the enigmatic
            messages hidden within three divine cards. 🌌
            <br />
            <br />
            🗝️ Your Daily Guide: Let the Tarot be your compass, leading you
            through the twists and turns of life. Find inspiration, solace, and
            the keys to unlock your hidden potential. 🗝️
            <br />
            <br />
            🌠 Fate's Mysterious Whispers: Every draw is unique, as the
            universe's mystical whispers shape your day. Embrace the magic and
            wonder that await at the touch of a button. 🌠
            <br />
            <br />
            🔍 Are you ready to delve into the shadows and embrace the
            enchantment? Click now to reveal your Tarot Daily Spread and let
            destiny's dance begin. 🔍
          </p>
          <button
            className="self-center w-full my-12 text-black md:w-1/2 hover:shadow-lg hover:shadow-accent btn-accent hover:ring-2 ring-bg-base btn-active btn"
            onClick={generateRandomCards}
          >
            Find today's cards
          </button>
        </div>
      )}
    </div>
  );
}

export default RandomTarotCards;
