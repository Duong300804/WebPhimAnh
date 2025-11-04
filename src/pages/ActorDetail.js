import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../api/tmdbApi';
import ActorMovieGrid from '../components/ActorMovieGrid';
import '../css/actor-detail.css';

const ActorDetail = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actorData = await tmdbApi.getActorDetail(id);
        setActor(actorData);

        const creditData = await tmdbApi.getActorMovieCredits(id);
        setCredits(creditData.cast || []);
      } catch (error) {
        console.error('Error fetching actor data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!actor) return <div>Loading...</div>;

  return (
    <div className="actor-detail container">
      <div className="actor-detail__header">
        <img
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
              : '/no-avatar.png'
          }
          alt={actor.name}
          className="actor-detail__img"
        />
        <div className="actor-detail__info">
          <h2>{actor.name}</h2>
          <p><strong>Known For:</strong> {actor.known_for_department || 'Unknown'}</p>
          <p><strong>Birthday:</strong> {actor.birthday || 'Unknown'}</p>
          <p><strong>Place of Birth:</strong> {actor.place_of_birth || 'Unknown'}</p>
          <p className="actor-detail__bio">{actor.biography || 'No biography available.'}</p>
        </div>
      </div>

      <h3 className="section__title">Movies & TV Shows</h3>
      <ActorMovieGrid movies={credits} />
    </div>
  );
};

export default ActorDetail;
