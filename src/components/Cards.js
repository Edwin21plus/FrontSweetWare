import React from "react";
import Card from "./Card";

import image1 from "../assets/back1.jpg";
import image2 from '../assets/back2.jpg'
import image3 from '../assets/back3.jpg'

const cards = [
  {
    id: 1,
    title: "Pastel1",
    image: image1,
    url: "https://faztweb.com",
    text: "$ 10",
  },
  {
    id: 2,
    title: "Pastel2",
    image: image2,
    url: "https://blog.faztweb.com",
    text: "$ 20",
  },
  {
    id: 3,
    title: "Pastel3",
    image: image3,
    url: "https://youtube.com/fazttech",
    text: "$ 30",
  },
  
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url}  text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;