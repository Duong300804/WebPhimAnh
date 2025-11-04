import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../api/tmdbApi';

import '../css/detail.css';
import CastList from '../components/CastList';
import VideoList from '../components/VideoList';
import MovieList from '../components/MovieList';
import ReviewList from '../components/ReviewList';

import { addToRecentlyWatched } from '../redux/RecentlyWatchedSlice';
import { addToFavorites, removeFromFavorites } from '../redux/FavoritesSlice';
import { addToWatchLater, removeFromWatchLater } from '../redux/WatchLaterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { OutlineButton } from '../components/Button';
import { useNavigate } from "react-router-dom";


const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    const dispatch = useDispatch(); 

    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    const favorites = useSelector(state => state.favorites.movies);
    const watchLater = useSelector(state => state.watchLater.movies);

    // Kiểm tra phim đã có trong danh sách chưa
    const isFavorite = favorites.some(fav => fav.id === item?.id);
    const isWatchLater = watchLater.some(w => w.id === item?.id);

    const handleToggleFavorite = () => {
        if (!auth.username) {
            navigate("/signin");
            return;
        }

        if (!item) return;
        if (isFavorite) {
            dispatch(removeFromFavorites(item));
        } else {
            dispatch(addToFavorites({ ...item, category }));
        }
    };

    const handleToggleWatchLater = () => {
        if (!auth.username) {
            navigate("/signin");
            return;
        }

        if (!item) return;
        if (isWatchLater) {
            dispatch(removeFromWatchLater(item));
        } else {
            dispatch(addToWatchLater({ ...item, category }));
        }
    };

    // useEffect(() => {
    // const getDetail = async () => {
    //     const response = await tmdbApi.detail(category, id, { params: {} });
    //     setItem(response);
    //     dispatch(addToRecentlyWatched({
    //     id: response.id,
    //     title: response.title || response.name,
    //     poster_path: response.poster_path,
    //     category: category
    //     }));
    //     window.scrollTo(0, 0);
    // };
    // getDetail();
    // }, [category, id]);

    const getDetail = useCallback(async () => {
        const response = await tmdbApi.detail(category, id, { params: {} });
        setItem(response);
        dispatch(
            addToRecentlyWatched({
                id: response.id,
                title: response.title || response.name,
                poster_path: response.poster_path,
                category: category,
            })
        );
        window.scrollTo(0, 0);
    }, [category, id, dispatch]);

    useEffect(() => {
        getDetail();
    }, [getDetail]);


    return (
        <>
            {
                item && (
                    <>
                        {/* <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div> */}
                        <div
                            className="banner"
                            style={{
                                backgroundImage: `url(${process.env.REACT_APP_IMAGE_ORIGINAL}${item.backdrop_path || item.poster_path})`
                            }}
                            ></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                {/* <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div> */}
                                <div
                                    className="movie-content__poster__img"
                                    style={{
                                        backgroundImage: `url(${process.env.REACT_APP_IMAGE_ORIGINAL}${item.poster_path || item.backdrop_path})`
                                    }}
                                    ></div>

                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                                <div className="detail-actions">
                                    <OutlineButton className="detail-button-favourite"  onClick={handleToggleFavorite}>
                                          {isFavorite ? '✓ In Favourites' : 'Add to Favourite'}
                                    </OutlineButton>
                                    <OutlineButton className="detail-button-watch-later"  onClick={handleToggleWatchLater}>
                                         {isWatchLater ? '✓ In Watch Later' : 'Watch Later'}
                                    </OutlineButton>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>

                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>User Reviews</h2>
                                </div>
                                <ReviewList type={category} id={item.id} />
                            </div>
                            
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;