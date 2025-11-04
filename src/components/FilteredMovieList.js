import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import tmdbApi from '../api/tmdbApi';
import MovieCard from './MovieCard';
import '../css/movie-list.css';
import 'swiper/css';

const FilteredMovieList = ({ genreId, countryCode }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const params = {};
      let response = null;

      if (genreId && countryCode) {
        response = await tmdbApi.getMoviesByGenreAndCountry(genreId, countryCode, params);
      } else if (genreId) {
        response = await tmdbApi.getMoviesByGenre(genreId, params);
      } else if (countryCode) {
        response = await tmdbApi.getMoviesByCountry(countryCode, params);
      }

      setItems(response?.results || []);
    };

    getList();
  }, [genreId, countryCode]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category="movie" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default FilteredMovieList;
