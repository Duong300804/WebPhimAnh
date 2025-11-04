import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { category } from "../api/tmdbApi";
import "../css/movie-card.css";

const FilterMovieCard = ({ item }) => {
  const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
  const link = `/${category[mediaType]}/${item.id}`;
  const bg = `${process.env.REACT_APP_IMAGE_W500}${item.poster_path || item.backdrop_path}`;

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default FilterMovieCard;
