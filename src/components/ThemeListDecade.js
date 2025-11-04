import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeCard from "./ThemeCard";

import "swiper/css";
import "../css/theme-list.css";

import decade80sImg from "../assets/decade-80s.png";
import decade90sImg from "../assets/decade-90s.png";
import decade2000sImg from "../assets/decade-2000s.png";
import decade2010sImg from "../assets/decade-2010s.png";
import decade2020sImg from "../assets/decade-2020s.png";

const decades = [
  {
    name: "1980s",
    id: "1980-01-01_1989-12-31",
    type: "decade",
    image: decade80sImg,
  },
  {
    name: "1990s",
    id: "1990-01-01_1999-12-31",
    type: "decade",
    image: decade90sImg,
  },
  {
    name: "2000s",
    id: "2000-01-01_2009-12-31",
    type: "decade",
    image: decade2000sImg,
  },
  {
    name: "2010s",
    id: "2010-01-01_2019-12-31",
    type: "decade",
    image: decade2010sImg,
  },
  {
    name: "2020s",
    id: "2020-01-01_2029-12-31",
    type: "decade",
    image: decade2020sImg,
  },
];

const ThemeListDecade = () => {
  return (
    <div className="theme-list">
      <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
        {decades.map((theme, index) => (
          <SwiperSlide key={index} className="theme-slide">
            <ThemeCard theme={theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThemeListDecade;
