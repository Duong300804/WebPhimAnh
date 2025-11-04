import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    now_playing: 'now_playing'
}

export const tvType ={
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (type, params) =>{
        console.log("🎯 getMoviesList: ", type);
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) =>{
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) =>{
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) =>{
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate,id, params) =>{
        const url = category[cate] + '/' + id;
        console.log(`Gọi detail API: ${url}, Params:`, params);
        return axiosClient.get(url, params);
    },
    credits: (cate, id) =>{
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) =>{
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
    getMoviesByGenre: (genreId, params) => {
        const url = 'discover/movie';
        return axiosClient.get(url, {params: {with_genres: genreId, ...params}});
    },
    getMoviesByCountry: (countryCode, params) => {
        const url = 'discover/movie';
        return axiosClient.get(url, {params: {with_origin_country: countryCode,...params}});
    },
    getMoviesByGenreAndCountry: (genreId, countryCode, params) => {
        const url = 'discover/movie';
        return axiosClient.get(url, {params: {with_genres: genreId,with_origin_country: countryCode,...params}});
    },
    getGenres: (type) => {
        const url = `genre/${category[type]}/list`;
        return axiosClient.get(url, { params: {} });
    },
    getCountries: () => {
        const url = 'configuration/countries';
        return axiosClient.get(url, { params: {} });
    },
    getTvByGenre: (genreId, params) => {
        const url = 'discover/tv';
        return axiosClient.get(url, { params: { with_genres: genreId, ...params } });
    },
    getTvByCountry: (countryCode, params) => {
        const url = 'discover/tv';
        return axiosClient.get(url, { params: { with_origin_country: countryCode, ...params } });
    },
    getTvByGenreAndCountry: (genreId, countryCode, params) => {
        const url = 'discover/tv';
        return axiosClient.get(url, { params: { with_genres: genreId, with_origin_country: countryCode, ...params}});
    },
    customDiscover: (url, params) => {
        return axiosClient.get(url, { params });
    },
    getTrending: (mediaType = 'all', timeWindow = 'day', params = {}) => {
        const url = `trending/${mediaType}/${timeWindow}`;
        return axiosClient.get(url, { params });
    },
    getThemeMovies: (type, id) => {
    if (type === 'company') {
        return axiosClient.get('discover/movie', {params: { with_companies: id, sort_by: 'popularity.desc'}});
    } else if (type === 'collection') {
        return axiosClient.get(`collection/${id}`);}
    },
    getPopularPeople: (params) => {
        const url = 'person/popular';
        return axiosClient.get(url, {params: {language: 'en-US', ...params}});
    },
    searchPeople: (params) => {
        const url = 'search/person';
        return axiosClient.get(url, { params });
    },
    getActorDetail: (id) => {
        return axiosClient.get(`person/${id}`, { params: {} });
    },
    getActorMovieCredits: (id) => {
        return axiosClient.get(`person/${id}/movie_credits`, { params: {} });
    },
    getMoviesByKeyword: (keywordId, params) => {
        const url = 'discover/movie';
        return axiosClient.get(url, {params: { with_keywords: keywordId, ...params }});
    },
    getTvByKeyword: (keywordId, params) => {
        const url = 'discover/tv';
        return axiosClient.get(url, { params: { with_keywords: keywordId, ...params }});
    },
    searchTvByKeyword: (query, params) => {
        const url = 'search/tv';
        return axiosClient.get(url, {params: { query, ...params }});
    },
    searchMovieByKeyword: (query, params) => {
        const url = 'search/movie';
        return axiosClient.get(url, {params: { query, ...params }});
    },
    searchMulti: (params) => {
        const url = 'search/multi';
        return axiosClient.get(url, { params });
    },
    getMoviesByNetwork: (networkId, params) => {
        const url = 'discover/movie';
        return axiosClient.get(url, { params: { with_networks: networkId, ...params } });
    },
    getTvByNetwork: (networkId, params) => {
        const url = 'discover/tv';
        return axiosClient.get(url, { params: { with_networks: networkId, ...params } });
    },

    getUnifiedDiscover: async (filters = {}, page = 1) => {
    try {
        const movieParams = { ...filters, page };
        const tvParams = { ...filters, page };

        if (filters.sort_by === "vote_average.desc") {
            movieParams["vote_count.gte"] = 500;
            tvParams["vote_count.gte"] = 500;
        }
        
        if (filters.query) {
            const [movieRes, tvRes] = await Promise.all([
                axiosClient.get('search/movie', { params: movieParams }),
                axiosClient.get('search/tv', { params: tvParams }),
            ]);

            const combinedResults = [
                ...movieRes.results.map((item) => ({ ...item, media_type: 'movie' })),
                ...tvRes.results.map((item) => ({ ...item, media_type: 'tv' })),
            ];

            return {
                results: combinedResults.sort((a, b) => b.popularity - a.popularity),
               total_pages: Math.max(movieRes.total_pages, tvRes.total_pages),
            };
        }

        if (filters.year) {
            movieParams.primary_release_year = filters.year;
            tvParams.first_air_date_year = filters.year;
            delete movieParams.year;
            delete tvParams.year;
        }

        const type = filters.type || 'all';
        delete movieParams.type;
        delete tvParams.type;

        let movieRes = { results: [], total_pages: 0 };
        let tvRes = { results: [], total_pages: 0 };

        if (type === 'movie' || type === 'all') {
            movieRes = await axiosClient.get('discover/movie', { params: movieParams });
        }

        if (type === 'tv' || type === 'all') {
            tvRes = await axiosClient.get('discover/tv', { params: tvParams });
        }

        const combinedResults = [
            ...movieRes.results.map((item) => ({ ...item, media_type: 'movie' })),
            ...tvRes.results.map((item) => ({ ...item, media_type: 'tv' })),
        ];

        const totalPages = Math.max(movieRes.total_pages, tvRes.total_pages);

        return {
            results: combinedResults.sort((a, b) => b.popularity - a.popularity),
            total_pages: totalPages,
        };
    } catch (error) {
        console.error("!!! Unified Discover/Search error:", error);
        return { results: [], total_pages: 0 };
        }
    },
    
    getFutureReleases: (params = {}) => {
        const url = 'movie/upcoming';
        return axiosClient.get(url, {params: { region: 'US', language: 'en-US', ...params }});
    },
    getMovieReviews: (movieId, params = {}) => {
        const url = `movie/${movieId}/reviews`;
        return axiosClient.get(url, { params });
    },
    getTvReviews: (tvId, params = {}) => {
        const url = `tv/${tvId}/reviews`;
        return axiosClient.get(url, { params });
    },
    getListById: (listId, params = {}) => {
        const url = `list/${listId}`;
        return axiosClient.get(url, { params });
    },
    detailWithKey: (cate, id, params = {}) => {
        const url = `${category[cate]}/${id}`;
        return axiosClient.get(url, { params: { ...params, api_key: process.env.REACT_APP_API_KEY || '824cc5c26ddbac073c0c4a98af5e608c' } });
    },  
    getUpcomingTv: (params = {}) => {
    const url = 'tv/on_the_air';
    return axiosClient.get(url, { params: { region: 'US', language: 'en-US', ...params } });
    },
    getTvAiringToday: (params = {}) => {
        const url = 'tv/airing_today';
        return axiosClient.get(url, { params: { region: 'US', language: 'en-US', ...params } });
    },

}

export default tmdbApi;