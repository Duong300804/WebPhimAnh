import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import '../css/movie-grid.css'; 

const WatchLater = () => {
  const movies = useSelector((state) => state.watchLater.movies);

  return (
    <div className="recently-watched-page">
      <h2 className="recently-watched-title">Watch Later</h2>
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>No movies saved to watch later.</p>
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

export default WatchLater;
