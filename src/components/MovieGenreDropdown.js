// src/components/GenreDropdown.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tmdbApi, { category } from '../api/tmdbApi';

const GenreDropdown = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await tmdbApi.getGenres('movie'); // hoặc 'tv' nếu TV genres
                setGenres(res.genres);
            } catch (err) {
                console.error('Failed to fetch genres', err);
            }
        };

        fetchGenres();
    }, []);

    return (
        <li className="dropdown">
            <span className="dropdown-toggle">Movie Genres</span>
            <ul className="dropdown-menu">
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <Link to={`/movie/genre/${genre.id}`}>{genre.name}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default GenreDropdown;
