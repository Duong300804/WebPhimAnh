import React from "react";
import ListDetailCard from "./ListDetailCard";
import "../css/list-detail-grid.css";

const ListDetailGrid = ({ items }) => {
  return (
    <div className="list-detail-grid">
      {items.map((item) => (
        <ListDetailCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListDetailGrid;
