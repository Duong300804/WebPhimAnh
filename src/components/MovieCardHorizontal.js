import React from "react";
import { Link } from "react-router-dom";
import "../css/movie-card-horizontal.css";
import { category } from "../api/tmdbApi";

const MovieCardHorizontal = ({ item, categoryType }) => {
  const link = `/${category[categoryType]}/${item.id}`;
  const backdrop = `${process.env.REACT_APP_IMAGE_W500}${item.backdrop_path || item.poster_path}`;
  const poster = `${process.env.REACT_APP_IMAGE_W500}${item.poster_path}`;

  return (
    <Link to={link} className="movie-card-horizontal">
      <div className="card-horizontal-bg" style={{ backgroundImage: `url(${backdrop})` }}>
        <div className="card-horizontal-overlay">
          <img src={poster} alt={item.title} className="card-horizontal-poster" />
          <div className="card-horizontal-info">
            <h3>{item.title || item.name}</h3>
            <p>{item.original_title || item.original_name}</p>
            <p>
              <strong>{item.adult ? "T18" : "T13"}</strong> &bull; {item.release_date?.split("-")[0]} &bull;{" "}
              {item.runtime ? `${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m` : "?"} &bull; HD
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCardHorizontal;
