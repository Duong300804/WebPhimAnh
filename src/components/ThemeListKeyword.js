import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeCardKeyword from "./ThemeCardKeyword";

import "swiper/css";
import "../css/theme-list.css";
import "../css/theme-card-keyword.css";

import timeTravelImg from "../assets/keyword-timetravel.png";
import superheroImg from "../assets/keyword-superhero.png";
import zombieImg from "../assets/keyword-zombie.png";
import spaceImg from "../assets/keyword-space.png";
import aiImg from "../assets/keyword-ai.png";
import trueStoryImg from "../assets/keyword-truestory.png";
import comingOfAgeImg from "../assets/keyword-comingofage.png";
import heistImg from "../assets/keyword-heist.png";
import survivalImg from "../assets/keyword-survival.png";
import postApocalypticImg from "../assets/keyword-postapocalyptic.png";

const keywords = [
  {
    name: "Time Travel",
    id: 4379,
    type: "keyword",
    category: "movie",
    image: timeTravelImg,
  },
  {
    name: "Superhero",
    id: 9715,
    type: "keyword",
    category: "movie",
    image: superheroImg,
  },
  {
    name: "Zombie",
    id: 12377,
    type: "keyword",
    category: "movie",
    image: zombieImg,
  },
  {
    name: "Space",
    id: 9882,
    type: "keyword",
    category: "movie",
    image: spaceImg,
  },
  {
    name: "Artificial Intelligence",
    id: 310 ,
    type: "keyword",
    category: "movie",
    image: aiImg,
  },
  {
    name: "Based on true story",
    id: 9672,
    type: "keyword",
    category: "movie",
    image: trueStoryImg,
  },
  {
    name: "Coming of Age",
    id: 10683,
    type: "keyword",
    category: "movie",
    image: comingOfAgeImg,
  },
  {
    name: "Heist",
    id: 10051,
    type: "keyword",
    category: "movie",
    image: heistImg,
  },
  {
    name: "Survival",
    id: 10349,
    type: "keyword",
    category: "movie",
    image: survivalImg,
  },
  {
    name: "Post-apocalyptic",
    id: 4458,
    type: "keyword",
    category: "movie",
    image: postApocalypticImg,
  },
];

const ThemeListKeyword = () => {
  return (
    <div className="theme-list">
      <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
        {keywords.map((theme, index) => (
          <SwiperSlide key={index} className="theme-slide">
            <ThemeCardKeyword theme={theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThemeListKeyword;
