import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import '../css/movie-grid.css'; 
import '../css/recently-watched.css';

const RecentlyWatched = () => {
  const movies = useSelector((state) => state.recentlyWatched.movies);

  return (
<div className="recently-watched-page">
      <h2 className="recently-watched-title">Recently Watched</h2>   
         <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id || index}
            item={movie}
            category={movie.category}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyWatched;
