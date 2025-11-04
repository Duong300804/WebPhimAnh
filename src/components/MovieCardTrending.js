import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import { category as cate } from '../api/tmdbApi';

import '../css/movie-card.css'; 
import '../css/movie-card-trending.css'; 

const MovieCardTrending = ({ item, category, index }) => {
    const bg = `https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`;

    return (
        <div className="movie-card-trending">
            <Link to={`/${category}/${item.id}`}>
                <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                    <Button><i className="bx bx-play"></i></Button>
                </div>
                    <div className="trending-info">
                        <div className="trending-rank">{index}</div>

                        <div className="movie-meta">
                            <h3 className="trending-title">{item.title || item.name}</h3>
                            <p className="movie-subtitle">
                                ⭐ {item.vote_average?.toFixed(1)} - {(
                                    item.release_date || item.first_air_date || ''
                                ).slice(0, 4)}
                            </p>
                        </div>
                    </div>
            </Link>
        </div>
    );
};

MovieCardTrending.propTypes = {
    item: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

export default MovieCardTrending;
