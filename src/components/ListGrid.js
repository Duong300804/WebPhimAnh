import React from 'react';
import ListCard from './ListCard';
import { useNavigate } from 'react-router-dom';
import '../css/list-grid.css';

const ListGrid = ({ lists }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/list/${id}`);
  };

  return (
    <div className="list-grid">
      {lists.map((list) => (
        <div
          key={list.id}
          className="list-grid__item"
          onClick={() => handleClick(list.id)}
        >
          <ListCard list={list} />
        </div>
      ))}
    </div>
  );
};

export default ListGrid;
