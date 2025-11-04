import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi from '../api/tmdbApi';
import { category } from '../api/tmdbApi';
import MovieCardTrending from './MovieCardTrending';

import 'swiper/css';
import '../css/movie-list.css';

const MovieListTrending = ({ mediaType = 'tv', timeWindow = 'day' }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const res = await tmdbApi.getTrending(mediaType, timeWindow);
                setItems(res.results.slice(0, 10)); // Top 10
            } catch (error) {
                console.error('Failed to fetch trending:', error);
            }
        };
        fetchTrending();
    }, [mediaType, timeWindow]);

    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {items.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <MovieCardTrending
                            item={item}
                            category={mediaType}
                            index={index + 1}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieListTrending;
