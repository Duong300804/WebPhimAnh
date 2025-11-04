import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "../css/movie-list-horizontal.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import tmdbApi, { category } from "../api/tmdbApi";
import MovieCardUpcoming from "./MovieCardUpcoming";

const MovieListUpcoming = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await tmdbApi.getFutureReleases();
        setItems(response.results.slice(0, 10));
      } catch (err) {
        console.error(" Failed to fetch upcoming movies:", err);
      }
    };

    getList();
  }, [props]);

  return (
    <div className="movie-list-horizontal">
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        className="horizontal-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="horizontal-slide">
            <MovieCardUpcoming item={item}  categoryType="movie" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieListUpcoming.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number, 
};

export default MovieListUpcoming;
