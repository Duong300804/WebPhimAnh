import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeCard from "./ThemeCard";

import "swiper/css";
import "../css/theme-list.css";

import marvelImg from '../assets/theme-marvel.png';
import dcImg from '../assets/theme-dc.png'
import pixarImg from '../assets/theme-pixar.png'
import warnerBrosImg from '../assets/theme-warnerbros.png'
import universalImg from '../assets/theme-universal.png'
import harryPotterImg from '../assets/theme-harrypotter.png'
import startWarsImg from '../assets/theme-starwars.png'
import transformersImg from '../assets/theme-transformer.png'
import fastandfuriousImg from '../assets/theme-f&f.png'

const themes = [
  {
    name: "Marvel",
    id: 420,
    type: "company",
    image: marvelImg,
  },
  {
    name: "DC",
    id: 9993,
    type: "company",
    image: dcImg,
  },
  {
    name: "Pixar",
    id: 3,
    type: "company",
    image: pixarImg,
  },
  {
    name: "Warner Bros",
    id: 174,
    type: "company",
    image: warnerBrosImg,
  },
  {
    name: "Universal",
    id: 33,
    type: "company",
    image: universalImg,
  },
  {
    name: "Harry Potter",
    id: 1241,
    type: "collection",
    image: harryPotterImg,
  },
  {
    name: "Star Wars",
    id: 10,
    type: "collection",
    image: startWarsImg,
  },
  {
    name: "Transformers",
    id: 8650,
    type: "collection",
    image: transformersImg,
  },
  {
    name: "Fast & Furious",
    id: 9485,
    type: "collection",
    image: fastandfuriousImg,
  },
];

const ThemeList = () => {
  return (
    <div className="theme-list">
      <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
        {themes.map((theme, index) => (
          <SwiperSlide key={index} className="theme-slide">
            <ThemeCard theme={theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThemeList;
