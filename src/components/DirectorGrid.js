import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';
import '../css/actor-page.css';

const IMG_BASE = 'https://image.tmdb.org/t/p/w300';

const DirectorGrid = ({ directors }) => {
  const [fullData, setFullData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const results = [];

      for (let item of directors) {
        try {
          const res = await tmdbApi.getActorDetail(item.id);
          results.push(res);
        } catch (err) {
          console.error('Failed to fetch director detail:', err);
        }
      }

      setFullData(results);
      setLoading(false);
    };

    fetchDetails();
  }, [directors]);

    if (loading) {
        return (
          <div className="section" style={{padding: '40px', fontSize: '18px' }}>
            🔄 Loading...
          </div>
        );
      }

  return (
    <div className="actor-grid">
      {fullData.map((director) => (
        <Link
          to={`/directors/${director.id}`}
          className="actor-card"
          key={director.id}
        >
          <img
            src={
              director.profile_path
                ? `${IMG_BASE}${director.profile_path}`
                : '/no-avatar.png'
            }
            alt={director.name}
            className="actor-img"
          />
          <div className="actor-name">{director.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default DirectorGrid;
