/* eslint-disable @next/next/no-img-element */
import React from "react";

interface childProps {
  cardData: any;
}

const Card: React.FC<childProps> = ({ cardData }) => {
  console.log("card", cardData);

  return (
    <div className="w-screen bg-blue-200 p-32" id="cardContainer">
      <div className="relative">
        <div className="flex flex-row flex-wrap justify-center">
          {cardData.map((card: any) => (
            <div
              key={card.id}
              className="bg-grisCustom shadow-md rounded-lg max-w-sm m-2">
              <img src={card.image} alt="post-image" className="rounded-t-lg" />
              <div className="p-5">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {card.title}
                </h5>
                <p className="font-normal text-gray-700 mb-3">{card.summary}</p>
              </div>
              <div className="flex justify-between items-center p-5">
                <a
                  className="text-white bg-gray-800 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center"
                  href={`/posts/${String(card.id)}`}>
                  Continue reading
                </a>
                <img
                  src="profile.jpeg"
                  alt="profile"
                  width={40}
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
