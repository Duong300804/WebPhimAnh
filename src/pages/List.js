import React, { useEffect, useState } from 'react';
import ListGrid from '../components/ListGrid';
import tmdbApi from '../api/tmdbApi';
import '../css/list-page.css';

const ListPage = () => {
  const [lists, setLists] = useState([]);
  const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const exampleListIds = [1,2,3,4,5,6,7,8,9,10,13,14,15,20,24,27,28,29,30,31,32,33,34,35,36,37
          ,310, 634, 4699, 4784, 6882, 6924, 43, 9024, 8146, 9387, 2514];
        const listsWithDetails = await Promise.all(
          exampleListIds.map(async (listId) => {
            const res = await tmdbApi.getListById(listId);
            if (!res || !res.items) {
              return { ...res, items: [] };
            }

            const itemsWithDetails = await Promise.all(
              res.items.map(async (item, index) => {
                await new Promise(resolve => setTimeout(resolve, index * 100)); 
                const type = item.media_type || 'movie';
                try {
                  const detail = await tmdbApi.detailWithKey(type, item.id); 
                  return { ...item, ...detail };
                } catch (err) {
                  return item;
                }
              })
            );

            return { ...res, items: itemsWithDetails };
          })
        );

        setLists(listsWithDetails);
        setIsLoading(false);
      } catch (err) {
        setError('Không tải được danh sách. Kiểm tra kết nối.');
        setIsLoading(false);
      }
    };

    fetchLists();
  }, []);

  if (isLoading) return <div className="section_page">🔄 Loading...</div>;
  if (error) return <div className="section_page">❌ Error: {error}</div>;

  return (
    <div className="section_page">
      <div className="section__header_page mb-3">
        <h2>📋 Featured Curated Lists</h2>
      </div>
      <ListGrid lists={lists} />
    </div>
  );
};

export default ListPage;