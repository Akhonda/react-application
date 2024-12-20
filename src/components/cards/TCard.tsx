import React from "react";

interface CardProps {
  image: string;
  title: string;
  Description: string;
}

const CardData: CardProps[] = [
  {
    image: "T",
    title: "Twitter",
    Description:
      "This is a Twitter Description where we are making a card with flex system.",
  },
  {
    image: "F",
    title: "Twitter",
    Description:
      "This is a Facebook Description where we are making a card with flex system.",
  },
  {
    image: "W",
    title: "Twitter",
    Description:
      "This is a Whatsapp Description where we are making a card with flex system.",
  },
  {
    image: "V",
    title: "Twitter",
    Description:
      "This is a Viber Description where we are making a card with flex system.",
  },
  {
    image: "I",
    title: "Twitter",
    Description:
      "This is a Instagram Description where we are making a card with flex system.",
  },
  {
    image: "P",
    title: "Twitter",
    Description:
      "This is a Pinterst Description where we are making a card with flex system.",
  },
  {
    image: "D",
    title: "Twitter",
    Description:
      "This is a Discord Description where we are making a card with flex system.",
  },
  {
    image: "Im",
    title: "Twitter",
    Description:
      "This is a Imo Description where we are making a card with flex system.",
  },
  {
    image: "Te",
    title: "Twitter",
    Description:
      "This is a Telegtam Description where we are making a card with flex system.",
  },
];

const TCard = () => {
  return (
    <div className="container">
      {/* {CardData.map(()=>())} sonerlint */}
      {CardData.map((data) => (
        <div className="card-container" key={data.image}>
          <p className="image">{data.image}</p>
          <h1 className="title">{data.title}</h1>
          <p className="description">{data.Description}</p>
          <button className="read-more">Read More</button>
        </div>
      ))}
    </div>
  );
};

export default TCard;
