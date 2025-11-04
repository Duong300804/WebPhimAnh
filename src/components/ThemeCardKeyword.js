import React from "react";
import { Link } from "react-router-dom";
import "../css/theme-card-keyword.css"; 

const ThemeCardKeyword = ({ theme }) => {
  return (
    <Link to={`/keyword/${theme.category}/${theme.id}/${theme.name}`}>
      <div
        className="theme-card-keyword"
        style={{ backgroundImage: `url(${theme.image})` }}
      >
        <div className="theme-card-keyword__overlay">
          <h3 className="theme-card-keyword__title">{theme.name}</h3>
          <span className="theme-card-keyword__link">Explore Topic &gt;</span>
        </div>
      </div>
    </Link>
  );
};

export default ThemeCardKeyword;
