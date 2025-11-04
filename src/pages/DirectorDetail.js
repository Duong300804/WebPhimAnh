import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../api/tmdbApi';
import DirectorMovieGrid from '../components/DirectorMovieGrid';
import '../css/actor-detail.css'; 

const DirectorDetail = () => {
  const { id } = useParams();
  const [director, setDirector] = useState(null);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const directorData = await tmdbApi.getActorDetail(id);
        setDirector(directorData);

        const creditData = await tmdbApi.getActorMovieCredits(id);
        setCredits(creditData.crew?.filter(item => item.job === 'Director') || []);
      } catch (error) {
        console.error('Error fetching director data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!director) return <div>Loading...</div>;

  return (
    <div className="actor-detail container">
      <div className="actor-detail__header">
        <img
          src={
            director.profile_path
              ? `https://image.tmdb.org/t/p/w300${director.profile_path}`
              : '/no-avatar.png'
          }
          alt={director.name}
          className="actor-detail__img"
        />
        <div className="actor-detail__info">
          <h2>{director.name}</h2>
          <p><strong>Known For:</strong> {director.known_for_department || 'Unknown'}</p>
          <p><strong>Birthday:</strong> {director.birthday || 'Unknown'}</p>
          <p><strong>Place of Birth:</strong> {director.place_of_birth || 'Unknown'}</p>
          <p className="actor-detail__bio">{director.biography || 'No biography available.'}</p>
        </div>
      </div>

      <h3 className="section__title">Movies Directed</h3>
    <DirectorMovieGrid movies={credits} />

    </div>
  );
};

export default DirectorDetail;
