import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeCard from "./ThemeCard";

import "swiper/css";
import "../css/theme-list.css";

import lotrImg from "../assets/serie-lotr.png";
import hobbitImg from "../assets/serie-hobbit.png";
import harryPotterImg from "../assets/serie-harrypotter.png";
import darkKnightImg from "../assets/serie-darkknight.png";
import ironManImg from "../assets/serie-ironman.png";
import capAmericaImg from "../assets/serie-captainamerica.png";
import spideyTobeyImg from "../assets/serie-spiderman-tobey.png";
import spideyAndrewImg from "../assets/serie-spiderman-andrew.png";
import spideyTomImg from "../assets/serie-spiderman-tom.png";
import matrixImg from "../assets/serie-matrix.png";
import wickImg from "../assets/serie-johnwick.png";
import godfatherImg from "../assets/serie-godfather.png";
import starwarsImg from "../assets/serie-starwars.png";
import toystoryImg from "../assets/serie-toystory.png";
import httydImg from "../assets/serie-httyd.png";
import kungfupandaImg from "../assets/serie-kungfupanda.png";
import carsImg from "../assets/serie-cars.png";
import fantasticBeastsImg from "../assets/serie-fantasticbeasts.png";
import deadpoolImg from "../assets/serie-deadpool.png";
import gotgImg from "../assets/serie-gotg.png";
import avengersImg from "../assets/serie-avengers.png";


const series = [
  { name: "The Lord of the Rings", id: 119, type: "collection", image: lotrImg },
  { name: "The Hobbit", id: 121938, type: "collection", image: hobbitImg },
  { name: "Harry Potter", id: 1241, type: "collection", image: harryPotterImg },
  { name: "The Dark Knight", id: 263, type: "collection", image: darkKnightImg },
  { name: "Iron Man", id: 131292, type: "collection", image: ironManImg },
  { name: "Captain America", id: 131295, type: "collection", image: capAmericaImg },
  { name: "Guardians of the Galaxy", id: 284433, type: "collection", image: gotgImg },
  { name: "Avengers", id: 86311, type: "collection", image: avengersImg },
  { name: "Spider-Man (Tobey)", id: 556, type: "collection", image: spideyTobeyImg },
  { name: "Spider-Man (Andrew)", id: 125574, type: "collection", image: spideyAndrewImg },
  { name: "Spider-Man (Tom)", id: 531241, type: "collection", image: spideyTomImg },
  { name: "The Matrix", id: 2344, type: "collection", image: matrixImg },
  { name: "John Wick", id: 404609, type: "collection", image: wickImg },
  { name: "The Godfather", id: 230, type: "collection", image: godfatherImg },
  { name: "Star Wars", id: 10, type: "collection", image: starwarsImg },
  { name: "Toy Story", id: 10194, type: "collection", image: toystoryImg },
  { name: "How to Train Your Dragon", id: 89137, type: "collection", image: httydImg },
  { name: "Kung Fu Panda", id: 77816, type: "collection", image: kungfupandaImg },
  { name: "Cars", id: 87118, type: "collection", image: carsImg },
  { name: "Fantastic Beasts", id: 435259, type: "collection", image: fantasticBeastsImg },
  { name: "Deadpool", id: 448150, type: "collection", image: deadpoolImg },
];

const ThemeListSerie = () => {
  return (
    <div className="theme-list">
      <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
        {series.map((theme, index) => (
          <SwiperSlide key={index} className="theme-slide">
            <ThemeCard theme={theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThemeListSerie;
