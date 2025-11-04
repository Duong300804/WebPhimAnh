import React from "react";
import { Link } from "react-router-dom";
import "../css/theme-card.css";

const ThemeCard = ({ theme }) => {
  return (
    <Link to={`/theme/${theme.type}/${theme.id}/${theme.name}`}>
      <div className="theme-card" style={{ backgroundImage: `url(${theme.image})` }}>
        <div className="theme-card__overlay">
          <h3 className="theme-card__title">{theme.name}</h3>
          <span className="theme-card__link">Explore Topic &gt;</span>
        </div>
      </div>
    </Link>
  );
};

export default ThemeCard;
