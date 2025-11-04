import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi from '../api/tmdbApi';
import MovieCard from './MovieCard';
import 'swiper/css';
import '../css/movie-list.css';

const FilteredTvByKeyword = ({ keywordId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      if (!keywordId) return;
      try {
        const res = await tmdbApi.getTvByKeyword(keywordId, {});
        setItems(res?.results || []);
      } catch (err) {
        console.error("Failed to fetch TV shows by keyword:", err);
      }
    };
    fetchTvShows();
  }, [keywordId]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={item} category="tv" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FilteredTvByKeyword;
