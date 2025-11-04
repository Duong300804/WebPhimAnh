import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeCard from "./ThemeCard";

import "swiper/css";
import "../css/theme-list.css";

import oscarImg from "../assets/award-oscar.png";
import cannesImg from "../assets/award-cannes.png";
import baftaImg from "../assets/award-bafta.png";
import goldenGlobeImg from "../assets/award-golden-globe.png";
import veniceImg from "../assets/award-venice.png";

const awards = [
  {
    name: "Oscar Winners",
    id: "oscar",
    type: "award",
    image: oscarImg,
    movieList: [
      155, // The Dark Knight
      278, // Shawshank Redemption
      496243, // Parasite
      13, // Forrest Gump
      424, // Schindler's List
      389, // 12 Years a Slave
      240, // The Godfather Part II
      3082, // The Pianist
      334543, // Lion
      272, // Batman Begins
      122, // The Lord of the Rings: Return of the King
      1891, // The Empire Strikes Back
      497, // The Green Mile
      550, // Fight Club
      947,     // Lawrence of Arabia
      45269,   // The King's Speech
      264644,  // Room
      205596,  // The Imitation Game
      453,     // A Beautiful Mind
      98       // Gladiator
    ],
  },
  {
    name: "Cannes Winners",
    id: "cannes",
    type: "award",
    image: cannesImg,
    movieList: [
            496243, // Parasite (2019)
            175,    // The Big Blue (1988)
            680,    // Pulp Fiction (1994)
            152584, // Blue Is the Warmest Color (La Vie d'Adèle… 2013)
            630240, // Titane (2021)
            497828, // Triangle of Sadness (2022)
            314402, // Dheepan (2015)
            660120, // The Worst Person in the World (2021)
            505192, // Shoplifters (2018) 
            5961,   // Fanny and Alexander (1982) 
            1913,   // The Sea Inside (Mar adentro, 2004) 
            336050, // Son of Saul (2015) 
            5967,   // The Umbrellas of Cherbourg (1964) 
            423,  // The Pianist (2002) 
            86837, // Amour (2012)
            38368,  // Uncle Boonmee Who Can Recall His Past Lives (2010) 
            46705,  // Blue Valentine (2010)  
            8841,   // The Class  
            401246  // The Square (2017) 
    ],
  },
  {
    name: "BAFTA Winners",
    id: "bafta",
    type: "award",
    image: baftaImg,
    movieList: [
      13, // Forrest Gump
      122, // Return of the King
      157336, // Interstellar
      205596 , // The Imitation Game (2014)   
    266856 , // The Theory of Everything (2014)   
    264644 , // Room (2015)   
    497    , // The Green Mile (1999)  
    244786 , // Whiplash (2014)   
    423    , // The Pianist (2002)   
    680    , // Pulp Fiction (1994)   
    1985   ,   // The Constant Gardener (2005)
    46705  ,  // Blue Valentine (2010)
    38     , // Eternal Sunshine of the Spotless Mind (2004)
    1165   , // The Queen (2006)
    2567   , // The Aviator (2004)
    489    , // Good Will Hunting (1997)
    745    , // The Sixth Sense (1999)
    600    , // Full Metal Jacket (1987)
    98     , // Gladiator (2000)
    424    , // Schindler's List (1993)
1993,  
    ],
  },
  {
    name: "Golden Globe Winners",
    id: "golden-globe",
    type: "award",
    image: goldenGlobeImg,
    movieList: [
      13, // Forrest Gump
      550, // Fight Club
      122, // Return of the King
      284, // The Sea Inside
      140607, // Star Wars: The Force Awakens
      207703, // The Theory of Everything
      8587, // The King's Speech
      264660, // Room
      272, // Batman Begins
      497, // The Green Mile
      767, // Harry Potter 1
      174, // Harry Potter 3
      671, // Harry Potter 7 Part 2
      329, // Jurassic Park
      1891, // Empire Strikes Back
      381, // Good Will Hunting
      107, // Snatch
      141, // Donnie Darko
      769, // The Sixth Sense
      680 // Pulp Fiction
    ],
  },
  {
    name: "Venice Film Festival",
    id: "venice",
    type: "award",
    image: veniceImg,
    movieList: [
        314402, // Dheepan (2015)
        110390, // A Pigeon Sat on a Branch Reflecting on Existence (2014)
        12163,  // The Wrestler (2008)
        426426, // Roma (2018)
        581734, // Nomadland (2021)
        1411,   // Fanny and Alexander (1982)
        334543, // Lion (2016)
        497828, // Triangle of Sadness (2022)
        38368,   // Uncle Boonmee Who Can Recall His Past Lives (2010)  
        258480,  // Carol (2015)  
        375262,  // The Favourite (2018)  
        194662,  // Birdman (2014)  
        680,     // Pulp Fiction (1994)  
        505192,  // Shoplifters (2018)  
        45269,   // The King's Speech (2010)  
        238,     // The Godfather (1972)  
        423,     // The Pianist (2002)  
        500,     // Reservoir Dogs (1992) 
        24,     // Kill Bill Vol. 1 (2003)
        399055, // The Shape of Water (2017)
    ],
  },
];

const ThemeListAward = () => {
  return (
    <div className="theme-list">
      <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
        {awards.map((theme, index) => (
          <SwiperSlide key={index} className="theme-slide">
            <ThemeCard theme={theme} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThemeListAward;
export {awards};