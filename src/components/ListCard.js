import React from 'react';
import '../css/list-card.css';
import noavatarImg from '../assets/no-avatar.png';

const ListCard = ({ list }) => {
  const {
    name,
    description,
    poster_path,
    item_count,
    created_by,
    items = []
  } = list;

  const totalVotes = items.reduce((sum, item) => sum + (item.vote_average || 0), 0);
  const totalRuntime = items.reduce((sum, item) => {
    if (item.media_type === 'tv' && item.episode_run_time && item.episode_run_time.length > 0) {
      return sum + (item.episode_run_time[0] || 0); 
    }
    return sum + (item.runtime || 0); 
  }, 0);
  const totalRevenue = items.reduce((sum, item) => {
    return item.media_type === 'movie' ? sum + (item.revenue || 0) : sum; 
  }, 0);

  const totalRuntimeFormatted = totalRuntime
    ? `${Math.floor(totalRuntime / 60)}h${totalRuntime % 60}m`
    : 'N/A';

  const totalRevenueFormatted = totalRevenue
    ? `${(totalRevenue / 1_000_000_000).toFixed(2)}B$`
    : 'N/A';

  const averageRating = items.length ? (totalVotes / items.length).toFixed(1) : 'N/A';

  const avatarUrl = created_by?.avatar?.tmdb?.avatar_path
    ? `https://image.tmdb.org/t/p/w45${created_by.avatar.tmdb.avatar_path}`
    : noavatarImg;

  const backgroundImage = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}` 
    : 'https://via.placeholder.com/500x281?text=No+Image';


  return (
  <div className="list-card">
     <div
    className="list-card__bg"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  />
    <img
      className="list-card__poster"
      src={backgroundImage}
      alt={name}
    />

    <div className="list-card__overlay">
      <div className="list-card__header">
        <img
          className="list-card__avatar"
          src={avatarUrl}
          alt={created_by || 'Unknown'}
        />
        <div>
          <h3 className="list-card__title">{name}</h3>
          <p className="list-card__creator">Created by: {created_by || 'N/A'}</p>
        </div>
      </div>

      <p className="list-card__description">{description}</p>

      <div className="list-card__stats">
        <span>⭐ Average Rating: {averageRating}</span>
        <span>⏱️ Total Runtime {totalRuntimeFormatted}</span>
        <span>💰 Total Revenue {totalRevenueFormatted}</span>
        <span>🎞️ {item_count} items</span>
      </div>
    </div>
  </div>
);

};

export default ListCard;