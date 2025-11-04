import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "../css/movie-list-horizontal.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import tmdbApi, { category } from "../api/tmdbApi";
import MovieCardHorizontal from "./MovieCardHorizontal";

const MovieListHorizontal = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
          setItems(response.results.slice(0, 10));
    };
    getList();
  }, []);

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
            <MovieCardHorizontal item={item} categoryType={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieListHorizontal.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieListHorizontal;
