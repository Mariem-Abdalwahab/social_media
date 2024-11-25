import React from "react";

function Card({ img, name, status }) {
  return (
    <div>
      <div className="relative ">
        <img className="rounded-md w-full h-40 bg-cover hover:scale-105 duration-75" src={img} alt={name}></img>
        <div className="flex justify-between items-center absolute sm:flex-col bottom-0 left-0 w-full h-fit p-1">
        <p className="absolute bottom-4 left-1 text-sm drop-shadow-sm  ">{name}</p>
        <p
          className= {`w-2 h-2 rounded-full text-sm absolute bottom-1 right-1 ${
            status === "Offline"
              ? " bg-red-600 "
              : " bg-green-600  "
          }`}
        >
        </p>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
