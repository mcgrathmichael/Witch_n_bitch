import React from "react";

const TarotCard = ({ card }) => {
  return (
    <div className="w-full md:w-96 md:flex md:self-center md:p-12 flex   md:flex-row  flex-col p-3">
      <div className="bg-primary transform transition-transform scale-100 md:hover:scale-110 hover:scale-105 rounded-lg hover:shadow-lg hover:shadow-accent  flex-1 flex flex-col">
        <img
          className="rounded-md  "
          src={`http://localhost:5000/assets/images/cards/${card?.img}`}
        ></img>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="mb-4 text-2xl font-bold text-accent underline">
            {card.name}
          </h3>
          <div className="mb-4 text-secondary text-sm flex-1">
            <div className="">
              <p>{card.fortune_telling}.</p>
            </div>
            <p className="my-2 font-semibold text-accent underline">
              Somethings we may want to consider:
            </p>
            <p> {card.randomQuestion}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
