import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import MovieCard from "../components/MovieCard";
import tmdbApi from "../api/tmdbApi";
import { OutlineButton } from "../components/Button";
import "../css/movie-grid.css";
import '../css/button.css';
import {awards} from '../components/ThemeListAward'

const Theme = () => {
  const { type, id, name } = useParams();

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

 const fetchData = async (pageNum = 1, isLoadMore = false) => {
  try {
    let response = null;

    if (type === "collection") {
      const res = await tmdbApi.customDiscover(`collection/${id}`, {});
      setItems(res.parts || []);
      setTotalPage(1);

    } else if (type === "company") {
      const res = await tmdbApi.customDiscover("discover/movie", {
        with_companies: id,
        sort_by: "popularity.desc",
        page: pageNum,
      });

      if (isLoadMore) {
        setItems((prev) => [...prev, ...res.results]);
      } else {
        setItems(res.results);
      }

      setPage(pageNum);
      setTotalPage(res.total_pages);

    } else if (type === "network") {
      const res = await tmdbApi.customDiscover("discover/tv", {
        with_networks: id,
        sort_by: "popularity.desc",
        page: pageNum,
      });

      if (isLoadMore) {
        setItems((prev) => [...prev, ...res.results]);
      } else {
        setItems(res.results);
      }

      setPage(pageNum);
      setTotalPage(res.total_pages);

    } else if (type === "decade") {
      const [startDate, endDate] = id.split("_");
      const res = await tmdbApi.customDiscover("discover/movie", {
        "primary_release_date.gte": startDate,
        "primary_release_date.lte": endDate,
        sort_by: "popularity.desc",
        page: pageNum,
      });

      if (isLoadMore) {
        setItems((prev) => [...prev, ...res.results]);
      } else {
        setItems(res.results);
      }

      setPage(pageNum);
      setTotalPage(res.total_pages);

    } else if (type === "award") {
        const award = awards.find((a) => a.id === id);
        if (award && award.movieList) {
          const moviePromises = award.movieList.map(async (movieId) => {
            const response = await tmdbApi.detail("movie", movieId, { params: {} });
            return response;
          });
          const movies = await Promise.all(moviePromises);
          setItems(movies);
          setTotalPage(1);
        } else {
          setItems([]);
        }
    }

  } catch (err) {
    console.error("Error fetching theme items:", err);
  }
};


  useEffect(() => {
    fetchData();
  }, [type, id]);

  const loadMore = () => {
    fetchData(page + 1, true);
  };

  return (
    <>
      <PageHeader>{name}</PageHeader>
      <div className="container">
        <div className="movie-grid">
          {items.map((item, i) => (
            <MovieCard
              key={i}
              item={item}
              category={type === "network" ? "tv" : "movie"}
            />
          ))}
        </div>

        {(type === "company" || type === "network" || type === "decade") && page < totalPage && (
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

export default Theme;
