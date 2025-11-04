import React, { useEffect, useState } from "react";
import tmdbApi from "../api/tmdbApi";
import FilterMovieCard from "./FilterMovieCard";
import Button, { OutlineButton } from "./Button";
import "../css/movie-grid.css";
import "../css/input.css";
import Input from "./Input";

const FilterMovieGrid = ({ filters }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchData = async (pageNum = 1, isLoadMore = false, keyword="") => {
    console.log("📦 Filter received in fetchData:", filters);
    const queryFilters = {
        ...(filters.type && { type: filters.type }),
        ...(filters.genre && { with_genres: filters.genre }),
        ...(filters.country && { with_origin_country: filters.country }),
        ...(filters.year && { year: filters.year }), 
        ...(filters.sort_by && { sort_by: filters.sort_by }),
      // // Nếu có từ khóa tìm kiếm
      // ...(searchKeyword && { query: searchKeyword }),
       ...(keyword && { query: keyword }),
    };
  console.log("📤 Query filters passed to API:", queryFilters);
    const response = await tmdbApi.getUnifiedDiscover(queryFilters, pageNum);

    if (isLoadMore) {
      setItems((prev) => [...prev, ...response.results]);
    } else {
      setItems(response.results);
    }

    setTotalPage(response.total_pages);
    setPage(pageNum);
  };

  useEffect(() => {
    fetchData(1, false, searchKeyword);
  }, [filters, searchKeyword]);

  const loadMore = () => {
    fetchData(page + 1, true, searchKeyword);
  };

  return (
    <>
      <div className="section mb-3">
        <div className="movie-search">
          <Input
            type="text"
            placeholder="Enter keyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Button className="small" onClick={() => fetchData(1, false, searchKeyword)}>
            Search
          </Button>
        </div>
      </div>

      <div className="movie-grid">
        {items.map((item, i) => (
          <FilterMovieCard key={i} item={item} />
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

export default FilterMovieGrid;
