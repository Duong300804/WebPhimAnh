import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';

const TvGenreDropdown = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await tmdbApi.getGenres('tv');
                setGenres(res.genres);
            } catch (err) {
                console.error('Failed to fetch TV genres', err);
            }
        };

        fetchGenres();
    }, []);

    return (
        <li className="dropdown">
            <span className="dropdown-toggle">TV Genres</span>
            <ul className="dropdown-menu">
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <Link to={`/tv/genre/${genre.id}`}>{genre.name}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default TvGenreDropdown;
