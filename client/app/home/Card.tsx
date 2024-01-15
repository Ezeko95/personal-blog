import { Cards } from "../components";
import React from "react";

interface Classes {
  cardClasses: string;
}

const Card: React.FC<Classes> = ({ cardClasses }) => {
  return (
    <div className={cardClasses}>
      <Cards />
    </div>
  );
};

export default Card;