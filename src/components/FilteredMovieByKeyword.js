import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi from '../api/tmdbApi';
import MovieCard from './MovieCard';
import 'swiper/css';
import '../css/movie-list.css';

const FilteredMovieByKeyword = ({ keywordId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!keywordId) return;
      try {
        const res = await tmdbApi.getMoviesByKeyword(keywordId, {});
        setItems(res?.results || []);
      } catch (err) {
        console.error("Failed to fetch movies by keyword:", err);
      }
    };
    fetchMovies();
  }, [keywordId]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={item} category="movie" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FilteredMovieByKeyword;
