import React from "react";
import { Link } from "react-router-dom";
import "../css/list-detail-card.css";
import { category } from "../api/tmdbApi";

const ListDetailCard = ({ item }) => {
  const link = `/${category[item.media_type || 'movie']}/${item.id}`;
  const backdrop = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`;
  const poster = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  const runtime =
    item.media_type === 'tv' && item.episode_run_time?.length
      ? item.episode_run_time[0]
      : item.runtime;

  const releaseDate =
    item.release_date || item.first_air_date || 'N/A';

  const revenue =
    item.revenue ? `${(item.revenue / 1_000_000).toFixed(1)}M$` : 'N/A';

  return (
    <Link to={link} className="list-detail-card">
      <div className="list-detail-card__bg" style={{ backgroundImage: `url(${backdrop})` }}>
        <div className="list-detail-card__overlay">
          <img src={poster} alt={item.title} className="list-detail-card__poster" />
          <div className="list-detail-card__info">
            <h3>{item.title || item.name}</h3>
            <p>⭐ {item.vote_average || 'N/A'}</p>
            <p>📅 {releaseDate}</p>
            <p>⏱ {runtime ? `${Math.floor(runtime / 60)}h ${runtime % 60}m` : 'N/A'}</p>
            <p>💰 {revenue}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListDetailCard;
