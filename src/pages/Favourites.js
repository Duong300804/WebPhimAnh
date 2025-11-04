import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import '../css/movie-grid.css'; 

const Favorites = () => {
  const movies = useSelector((state) => state.favorites.movies);

  return (
    <div className="recently-watched-page">
      <h2 className="recently-watched-title">Favorites</h2>
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          movies.map((movie, index) => (
            <MovieCard
              key={movie.id || index}
              item={movie}
              category={movie.category}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
