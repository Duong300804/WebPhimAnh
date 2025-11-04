import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi from '../api/tmdbApi';
import MovieCard from './MovieCard';
import 'swiper/css';
import '../css/movie-list.css';

const FilteredMovieBySearchKeyword = ({ query }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        const res = await tmdbApi.searchMovieByKeyword(query, { page: 1 });
        setItems(res?.results || []);
      } catch (err) {
        console.error("Failed to fetch movies by search keyword:", err);
      }
    };

    fetchData();
  }, [query]);

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

export default FilteredMovieBySearchKeyword;
