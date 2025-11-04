import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import FilterControls from "../components/FilterControls";
import FilterMovieGrid from "../components/FilterMovieGrid";

const Filter = () => {
  const [filters, setFilters] = useState({
    type: "all",
    genre: "",
    country: "",
    year: "",
    sort_by: "popularity.desc",
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);

  const handleApply = () => {
    console.log("✅ Applied Filters:", filters);
    setAppliedFilters(filters);
  };

  return (
    <>
      <PageHeader>Filter: Movies & TV Shows</PageHeader>
      <div className="container">
        <FilterControls filters={filters} setFilters={setFilters} onApply={handleApply} />
        <div className="section mb-3">
          <FilterMovieGrid filters={appliedFilters} />
        </div>
      </div>
    </>
  );
};

export default Filter;
