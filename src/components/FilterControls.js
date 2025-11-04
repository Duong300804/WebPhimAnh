import React, { useEffect, useState } from "react";
import tmdbApi from "../api/tmdbApi";
import "../css/filter-controls.css";
import Button from "./Button";

const sortOptions = [
  { value: "popularity.desc", label: "Most Popular" },
  { value: "popularity.asc", label: "Least Popular" },
  { value: "vote_average.desc", label: "Top Rated" },
  { value: "vote_average.asc", label: "Lowest Rated" },
  { value: "release_date.desc", label: "Newest" },
  { value: "release_date.asc", label: "Oldest" },
];

const FilterControls = ({ filters, setFilters, onApply }) => {
  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchFilterData = async () => {
      let mergedGenres = [];

      if (filters.type === "movie") {
        const res = await tmdbApi.getGenres("movie");
        mergedGenres = res.genres || [];
      } else if (filters.type === "tv") {
        const res = await tmdbApi.getGenres("tv");
        mergedGenres = res.genres || [];
      } else {
        const [movieRes, tvRes] = await Promise.all([
          tmdbApi.getGenres("movie"),
          tmdbApi.getGenres("tv"),
        ]);

        const movieGenres = movieRes.genres || [];
        const tvGenres = tvRes.genres || [];

        const combinedMap = {};
        [...movieGenres, ...tvGenres].forEach((g) => {
          combinedMap[g.id] = g.name;
        });

        mergedGenres = Object.entries(combinedMap).map(([id, name]) => ({
          id,
          name,
        }));
      }

      setGenres(mergedGenres);

      const countryRes = await tmdbApi.getCountries();
      setCountries(countryRes || []);
    };

    fetchFilterData();
  }, [filters.type]);

  const yearList = Array.from({ length: 76 }, (_, i) => 2025 - i);

  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="filter-controls-container mb-3">
      <select value={filters.type} onChange={(e) => handleChange("type", e.target.value)}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="tv">TV Show</option>
      </select>

      <select value={filters.genre} onChange={(e) => handleChange("genre", e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>

      <select value={filters.country} onChange={(e) => handleChange("country", e.target.value)}>
        <option value="">All Countries</option>
        {countries.map((c) => (
          <option key={c.iso_3166_1} value={c.iso_3166_1}>{c.english_name}</option>
        ))}
      </select>

      <select value={filters.year} onChange={(e) => handleChange("year", e.target.value)}>
        <option value="">All Years</option>
        {yearList.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      <select value={filters.sort_by} onChange={(e) => handleChange("sort_by", e.target.value)}>
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <Button className="small" onClick={onApply}>
        Apply
      </Button>
        </div>
  );
};

export default FilterControls;
