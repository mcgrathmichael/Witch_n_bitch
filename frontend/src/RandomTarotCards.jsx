import React, { useState } from "react";
import TarotCard from "./TarotCard";
import tarotData from "./assets/archive/tarot-images.json";

const RandomTarotCards = () => {
  const [randomCards, setRandomCards] = useState([]);
  const [showCopy, setShowCopy] = useState(true);
  const generateRandomCards = () => {
    const shuffledCards = tarotData.cards.sort(() => 0.5 - Math.random());

    // Take the first three unique cards
    let selectedCards = [];
    let index = 0;

    while (selectedCards.length < 3 && index < shuffledCards.length) {
      const currentCard = shuffledCards[index];

      // Check if the current card is not already in the selected cards
      if (!selectedCards.some((card) => card.number === currentCard.number)) {
        // Randomly select light or shadow meanings
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
        // Add the selected card with the random question to the array
        selectedCards.push({
          ...currentCard,
          randomQuestion: randomMeaning,
          randomFortune: randomFortune,
        });
      }

      index++;
    }
    setShowCopy(false);
    setRandomCards(selectedCards);
  };

  return (
    <div className="md:card md:h-1/2  md:carousel">
      <div className="  md:flex md:self-center h-4/6 md:flex-row">
        <div className="md:carousel-item  pb-10">
          {" "}
          {randomCards.map((card) => (
            <TarotCard key={card.number} card={card} />
          ))}
        </div>
      </div>{" "}
      {showCopy && (
        <div className="flex card-body rounded-md bg-primary self-center text-accent">
          <p className="max-w-md text-center p-4 text-sm sm:text-base">
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
            className="w-full hover:shadow-lg hover:shadow-accent my-12 btn-accent text-black hover:ring-2 ring-bg-base btn-active btn"
            onClick={generateRandomCards}
          >
            Find today's cards
          </button>
        </div>
      )}
    </div>
  );
};

export default RandomTarotCards;
