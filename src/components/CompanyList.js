import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeCard from "./ThemeCard";

import "swiper/css";
import "../css/theme-list.css";

import ghibliImg from '../assets/studio-ghibli.png';
import toeiImg from '../assets/toei.png';
import madhouseImg from '../assets/madhouse.png';
import bonesImg from '../assets/bones.png';
import mappaImg from '../assets/mappa.png';
import kyotoImg from '../assets/kyoto.png';
import a1Img from '../assets/a1pictures.png';
import sunriseImg from '../assets/sunrise.png';
import igImg from '../assets/production-ig.png';
import cloverworksImg from '../assets/cloverworks.png';
import ufotableImg from '../assets/ufotable.png';
import witImg from '../assets/witstudio.png';

const themes = [
  {
    name: "Studio Ghibli",
    id: 10342,
    type: "company",
    image: ghibliImg,
  },
  {
    name: "ufotable",
    id: 5887,
    type: "company",
    image: ufotableImg,
  },
  {
    name: "WIT Studio",
    id: 31058,
    type: "company",
    image: witImg,
  },
  {
    name: "Toei Animation",
    id: 5542,
    type: "company",
    image: toeiImg,
  },
  {
    name: "Madhouse",
    id: 3464,
    type: "company",
    image: madhouseImg,
  },
  {
    name: "Bones",
    id: 173132,
    type: "company",
    image: bonesImg,
  },
  {
    name: "MAPPA",
    id: 21444 ,
    type: "company",
    image: mappaImg,
  },
  {
    name: "Kyoto Animation",
    id: 5438,
    type: "company",
    image: kyotoImg,
  },
  {
    name: "A-1 Pictures",
    id: 13113,
    type: "company",
    image: a1Img,
  },
  {
    name: "Sunrise",
    id: 3153 ,
    type: "company",
    image: sunriseImg,
  },
  {
    name: "Production I.G",
    id: 529,
    type: "company",
    image: igImg,
  },
  {
    name: "CloverWorks",
    id: 121589,
    type: "company",
    image: cloverworksImg,
  },
];

const CompanyList = () => {
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

export default CompanyList;
