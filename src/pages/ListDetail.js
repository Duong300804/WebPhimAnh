import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../api/tmdbApi";
import ListDetailGrid from "../components/ListDetailGrid";
import Button, { OutlineButton } from "../components/Button";
import "../css/list-page.css";

const ListDetailPage = () => {
  const { id } = useParams();
  const [list, setList] = useState(null);
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllPages = async () => {
      try {
        let currentPage = 1;
        let allItems = [];
        let totalPages = 1;
        let listInfo = null;

        while (currentPage <= totalPages) {
          const res = await tmdbApi.getListById(id, { page: currentPage });

          if (currentPage === 1) {
            totalPages = res.total_pages || 1;
            listInfo = res; 
          }

          allItems = [...allItems, ...res.items];
          currentPage++;
        }

        const itemsWithDetails = await Promise.all(
          allItems.map(async (item) => {
            const type = item.media_type || "movie";
            try {
              const detail = await tmdbApi.detailWithKey(type, item.id);
              return { ...item, ...detail };
            } catch {
              return item;
            }
          })
        );

        setList({ ...listInfo, items: itemsWithDetails });
        setItems(itemsWithDetails);
        setVisibleItems(itemsWithDetails.slice(0, pageSize));
        setIsLoading(false);
      } catch (err) {
        setError("Không thể tải danh sách");
        setIsLoading(false);
      }
    };

    fetchAllPages();
  }, [id, pageSize]);

  const loadMore = () => {
    const nextPage = page + 1;
    const newVisible = items.slice(0, nextPage * pageSize);
    setVisibleItems(newVisible);
    setPage(nextPage);
  };

  if (isLoading) return <div className="section_page">🔄 Loading...</div>;
  if (error) return <div className="section_page">❌ {error}</div>;

  return (
    <div className="section_page">
      <div className="section__header_page mb-3">
        <h2>{list.name}</h2>
      </div>

      <ListDetailGrid items={visibleItems} />

      {visibleItems.length < items.length && (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load More
          </OutlineButton>
        </div>
      )}
    </div>
  );
};

export default ListDetailPage;
