import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import MovieCard from "../components/MovieCard";
import { OutlineButton } from "../components/Button";
import tmdbApi from "../api/tmdbApi";
import "../css/movie-grid.css";

const SearchKeyword = () => {
  const { keyword } = useParams();
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const res = await tmdbApi.searchMulti({ query: keyword, page: 1 });
        setResults(res.results || []);
        setTotalPage(res.total_pages);
        setPage(1);
      } catch (err) {
        console.error("Lỗi khi tìm kiếm:", err);
      }
    };
    fetchSearch();
  }, [keyword]);

  const loadMore = async () => {
    const nextPage = page + 1;
    try {
      const res = await tmdbApi.searchMulti({ query: keyword, page: nextPage });
      setResults(prev => [...prev, ...(res.results || [])]);
      setPage(nextPage);
    } catch (err) {
      console.error("Lỗi load more:", err);
    }
  };

  return (
    <>
      <PageHeader>Search: {keyword}</PageHeader>
      <div className="container">
        <div className="movie-grid">
          {results
            .filter(item => item.media_type === "movie" || item.media_type === "tv")
            .map((item, i) => (
              <MovieCard key={i} item={item} category={item.media_type} />
            ))}
        </div>
        {page < totalPage && (
          <div className="movie-grid__loadmore">
            <OutlineButton className="small" onClick={loadMore}>
              Load more
            </OutlineButton>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchKeyword;
