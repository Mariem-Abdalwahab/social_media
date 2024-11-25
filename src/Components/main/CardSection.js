import React from "react";
import Card from "./Card";
import { cardData } from "../../assets/cardData";
function CardSection() {
  return (
    <div className="grid grid-cols-5 gap-1 whitespace-nowrap">
      {cardData.map((ele) => {
        return (
          <div key={ele.id}>
            {" "}
            <Card
              id={ele.id}
              img={ele.image}
              name={ele.name}
              status={ele.status}
            />{" "}
          </div>
        );
      })}
    </div>
  );
}

export default CardSection;
