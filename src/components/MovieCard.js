import React from "react";

import '../css/movie-card.css';

import Button from "./Button";
import { category } from "../api/tmdbApi";
import { Link } from "react-router-dom";

const MovieCard = props => {

    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;
    // const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    const bg = `${process.env.REACT_APP_IMAGE_W500}${item.poster_path || item.backdrop_path}`;


    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    )
}

export default MovieCard;