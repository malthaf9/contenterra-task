import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const MainContainer = () => {
  const card = useSelector((store) => store.card?.cardData);

  if (card === null) return null;

  return (
    <div>
      <div>
        {card.map((mainData, index) => (
          <Card
            key={index}
            title={mainData.data.title}
            text={mainData.data.selftext}
            url={mainData.data.url}
            score={mainData.data.score}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
