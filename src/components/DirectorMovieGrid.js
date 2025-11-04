import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Button, { OutlineButton } from './Button';
import '../css/movie-grid.css';
import '../css/button.css';

const DirectorMovieGrid = ({ movies = [] }) => {
  const [visibleCount, setVisibleCount] = useState(20);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  return (
    <>
      <div className="movie-grid">
        {movies.slice(0, visibleCount).map((item) => (
          <MovieCard key={item.id} item={item} category="movie" />
        ))}
      </div>
      {visibleCount < movies.length && (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load more
          </OutlineButton>
        </div>
      )}
    </>
  );
};

export default DirectorMovieGrid;
