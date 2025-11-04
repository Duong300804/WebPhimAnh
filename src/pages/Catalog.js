import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PageHeader from '../components/PageHeader';
import { category as cate, getGenres } from '../api/tmdbApi';
import MovieGrid from '../components/MovieGrid';
import tmdbApi from '../api/tmdbApi';

const Catalog = () => {
    const { category, type, genreId, countryCode } = useParams();

    const [genreName, setGenreName] = useState('');
    const [countryName, setCountryName] = useState('');


    useEffect(() => {
        const fetchGenre = async () => {
            if (genreId) {
                try {
                    const res = await tmdbApi.getGenres(category);
                    const found = res.genres.find((g) => g.id.toString() === genreId);
                    setGenreName(found ? found.name : '');
                } catch (error) {
                    console.error('Failed to fetch genres:', error);
                    setGenreName('');
                }
            } else {
                setGenreName('');
            }
        };

        fetchGenre();
    }, [category, genreId]);


    useEffect(() => {
        const fetchCountry = async () => {
            if (countryCode) {
                try {
                    const res = await tmdbApi.getCountries();
                    const found = res.find(c => c.iso_3166_1 === countryCode);
                    setCountryName(found ? found.english_name : '');
                } catch (error) {
                    console.error('Failed to fetch countries:', error);
                    setCountryName('');
                }
            } else {
                setCountryName('');
            }
        };

        fetchCountry();
    }, [countryCode]);


    return (
        <>
            <PageHeader>
                {genreName && countryName
                    ? `${genreName} ${countryName} ${category === cate.movie ? 'Movies' : 'TV Shows'}`
                    : genreName
                        ? `${genreName} ${category === cate.movie ? 'Movies' : 'TV Shows'}`
                        : countryName
                            ? `${countryName} ${category === cate.movie ? 'Movies' : 'TV Shows'}`
                            : category === cate.movie
                                ? 'Movies'
                                : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid  category={category || 'movie'}
                                type={type}
                                genreId={genreId}
                                countryCode={countryCode} />
                </div>
            </div>
        </>
    );
};

export default Catalog;
