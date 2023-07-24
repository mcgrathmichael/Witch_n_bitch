/* eslint-disable */
import React from "react";

function TarotCard({ card }) {
  return (
    <div className="flex-col flex-wrap w-full h-full p-3 md:p-16 md:h-auto md:flex-row">
      <div className="flex flex-col md:h-[56rem]   flex-1 transition-transform transform scale-100 rounded-lg bg-primary md:hover:scale-105  hover:shadow-lg hover:shadow-accent">
        <img
          className="rounded-md"
          src={`http://localhost:5000/assets/images/cards/${card?.img}`}
        />
        <div className="flex flex-col flex-1 p-4 overflow-hidden h-80">
          <h3 className="mb-4 text-2xl font-bold underline text-accent">
            {card.name}
          </h3>
          <div className="flex-1 mb-4 overflow-y-auto text-sm text-secondary">
            <div className="">
              <p>{card.fortune_telling}.</p>
            </div>
            <p className="my-2 font-semibold underline text-accent">
              Somethings we may want to consider:
            </p>
            <p> {card.randomQuestion}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarotCard;
