import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import MovieCard from "../components/MovieCard";
import { OutlineButton } from "../components/Button";
import tmdbApi from "../api/tmdbApi";
import "../css/movie-grid.css";

const Keyword = () => {
  const { category, id, name } = useParams();  
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await tmdbApi.customDiscover(`discover/${category}`, {
          with_keywords: id,
          sort_by: "popularity.desc",
          page: 1
        });
        setItems(res.results);
        setTotalPage(res.total_pages);
        setPage(1);
      } catch (err) {
        console.error("Lỗi fetch theo keyword:", err);
      }
    };

    fetchData();
  }, [category, id]);

  const loadMore = async () => {
    const nextPage = page + 1;
    try {
      const res = await tmdbApi.customDiscover(`discover/${category}`, {
        with_keywords: id,
        sort_by: "popularity.desc",
        page: nextPage
      });
      setItems(prev => [...prev, ...res.results]);
      setPage(nextPage);
    } catch (err) {
      console.error("Lỗi load more:", err);
    }
  };

  return (
    <>
      <PageHeader>{name}</PageHeader>
      <div className="container">
        <div className="movie-grid">
          {items.map((item, index) => (
            <MovieCard key={index} item={item} category={category} />
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

export default Keyword;
