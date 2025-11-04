import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeCard from "./ThemeCard";

import "swiper/css";
import "../css/theme-list.css";

import netflixImg from '../assets/network-netflix.png';
import hboImg from '../assets/network-hbo.png';
import disneyPlusImg from '../assets/network-disneyplus.png';
import primeImg from '../assets/network-prime.png';
import appleImg from '../assets/network-appletv.png';
import huluImg from '../assets/network-hulu.png';
import disneyChannelImg from '../assets/network-disneychannel.png';
import cartoonNetworkImg from '../assets/network-cartoonnetwork.png';
import nickelodeonImg from '../assets/network-nickelodeon.png';
import disneyXdImg from '../assets/network-disneyxd.png';

const networks = [
  {
    name: "Netflix",
    id: 213,
    type: "network",
    image: netflixImg,
  },
  {
    name: "HBO",
    id: 49,
    type: "network",
    image: hboImg,
  },
  {
    name: "Disney Channel",
    id: 54,
    type: "network",
    image: disneyChannelImg,
  },
  {
    name: "Cartoon Network",
    id: 56,
    type: "network",
    image: cartoonNetworkImg,
  },
  {
    name: "Amazon Prime Video",
    id: 1024,
    type: "network",
    image: primeImg,
  },
  {
    name: "Disney+",
    id: 2739,
    type: "network",
    image: disneyPlusImg,
  },
  {
    name: "Apple TV+",
    id: 2552,
    type: "network",
    image: appleImg,
  },
  {
    name: "Hulu",
    id: 453,
    type: "network",
    image: huluImg,
  },
  {
    name: "Nickelodeon",
    id: 13,
    type: "network",
    image: nickelodeonImg,
  },
  {
    name: "Disney XD",
    id: 44,
    type: "network",
    image: disneyXdImg,
  },
];

const NetworkList = () => {
  return (
    <div className="theme-list">
      <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
        {networks.map((theme, index) => (
          <SwiperSlide key={index} className="theme-slide">
            <ThemeCard theme={theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NetworkList;
