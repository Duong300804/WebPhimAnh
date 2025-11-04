import React from "react";
import { Link } from "react-router-dom";
import "../css/movie-card-upcoming.css";
import { category } from "../api/tmdbApi";

const MovieCardUpcoming = ({ item, categoryType }) => {
  const link = `/${category[categoryType]}/${item.id}`;
  const backdrop = `${process.env.REACT_APP_IMAGE_W500}${item.backdrop_path || item.poster_path}`;

  return (
    <Link to={link} className="movie-card-upcoming">
      <div className="card-upcoming-bg" style={{ backgroundImage: `url(${backdrop})` }}>
        <div className="card-upcoming-overlay">
          <h3 className="card-upcoming-title">{item.title || item.name}</h3>
          <div className="card-upcoming-badge">Coming Soon</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCardUpcoming;
