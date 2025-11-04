import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import tmdbApi, { category, movieType, tvType } from '../api/tmdbApi';

import '../css/movie-grid.css';
import '../css/movie-card.css';
import '../css/button.css';
import '../css/input.css';

import MovieCard from './MovieCard';
import Button, { OutlineButton } from './Button';
import Input from './Input';

const MovieGrid = ({ category: categoryType, type }) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword, genreId, countryCode } = useParams();

    const movieTypes = ['popular', 'top_rated', 'upcoming', 'now_playing'];
    const tvTypes = ['popular', 'top_rated', 'on_the_air'];

    const actualType =
        categoryType === category.movie
            ? movieTypes.includes(type) ? type : movieType.upcoming
            : tvTypes.includes(type) ? type : tvType.popular;

    const fetchData = async (pageNum = 1, isLoadMore = false) => {
        const params = { page: pageNum };
        let response = null;

try {
    if (keyword) {
        response = await tmdbApi.search(categoryType, {
            params: { query: keyword, page: pageNum },
        });
    } else if (genreId || countryCode) {
        const baseUrl = categoryType === category.movie ? 'discover/movie' : 'discover/tv';
        const paramsWithFilters = {
            with_genres: genreId,
            with_origin_country: countryCode,
            ...params
        };

        // Xoá key undefined để tránh lỗi
        Object.keys(paramsWithFilters).forEach(
            (key) => paramsWithFilters[key] === undefined && delete paramsWithFilters[key]
        );

        response = await tmdbApi.customDiscover(baseUrl, paramsWithFilters);
    } else {
        if (categoryType === category.movie) {
            response = await tmdbApi.getMoviesList(actualType, { params });
        } else {
            response = await tmdbApi.getTvList(actualType, { params });
        }
    }

    if (isLoadMore) {
        setItems((prev) => [...prev, ...response.results]);
    } else {
        setItems(response.results);
    }

    setTotalPage(response.total_pages);
    setPage(pageNum);
} catch (error) {
    console.error("🔥 Error fetching data:", error);
}

    };

    useEffect(() => {
        fetchData();
    }, [categoryType, keyword, type, genreId, countryCode]);

    const loadMore = () => {
        fetchData(page + 1, true);
    };

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={categoryType} keyword={keyword} />
            </div>

            <div className="movie-grid">
                {items.map((item, i) => (
                    <MovieCard key={i} item={item} category={categoryType} />
                ))}
            </div>

            {page < totalPage && (
                <div className="movie-grid__loadmore">
                    <OutlineButton className="small" onClick={loadMore}>
                        Load more
                    </OutlineButton>
                </div>
            )}
        </>
    );
};

const MovieSearch = ({ category, keyword: defaultKeyword }) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState(defaultKeyword || '');

    const goToSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            navigate(`/${category}/search/${keyword}`);
        }
    }, [keyword, category, navigate]);

    useEffect(() => {
        const enterEvent = (e) => {
            if (e.keyCode === 13) {
                goToSearch();
            }
        };
        document.addEventListener('keyup', enterEvent);
        return () => document.removeEventListener('keyup', enterEvent);
    }, [goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>
                Search
            </Button>
        </div>
    );
};

export default MovieGrid;
