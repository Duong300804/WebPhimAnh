import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/actor-page.css';

const ActorGrid = ({ actors }) => {
  return (
    <div className="actor-grid">
      {actors.map((actor) => (
        <Link 
          to={`/actor/${actor.id}`} 
          className="actor-card"
          key={actor.id}
        >
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                : '/no-avatar.png'
            }
            alt={actor.name}
            className="actor-img"
          />
          <div className="actor-name">{actor.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default ActorGrid;
