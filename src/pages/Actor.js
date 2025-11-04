import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';
import Input from '../components/Input';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import ActorGrid from '../components/ActorGrid';

const Actor = () => {
  const { keyword } = useParams();
  const [actors, setActors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchActors = async (pageNum = 1, isLoadMore = false) => {
    try {
      setLoading(true);
      const res = keyword
        ? await tmdbApi.searchPeople({ query: keyword, page: pageNum })
        : await tmdbApi.getPopularPeople({ page: pageNum });

      if (isLoadMore) {
        setActors((prev) => [...prev, ...res.results]);
      } else {
        setActors(res.results);
      }

      setPage(pageNum);
      setTotalPage(res.total_pages);
    } catch (err) {
      console.error('Error fetching actors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setActors([]); // clear list when keyword changes
    fetchActors(1, false);
  }, [keyword]);

  const loadMore = () => {
    if (!loading && page < totalPage) {
      fetchActors(page + 1, true);
    }
  };

  const [searchInput, setSearchInput] = useState(keyword || '');
  const goToSearch = () => {
    if (searchInput.trim()) {
      navigate(`/actors/search/${searchInput.trim()}`);
    }
  };

  return (
    <>
      <PageHeader>{keyword ? `Search: ${keyword}` : 'Popular Actors'}</PageHeader>

    <div className="container mb-3 actor-search">
        <Input
          type="text"
          placeholder="Search actors..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className="small" onClick={goToSearch}>
          Search
        </Button>
      </div>

      <div className="container actor-page">
        {actors.length > 0 ? (
          <>
            <ActorGrid actors={actors} />
            {page < totalPage && (
              <div className="movie-grid__loadmore">
                <Button className="small" onClick={loadMore} disabled={loading}>
                  {loading ? 'Loading...' : 'Load more'}
                </Button>
              </div>
            )}
          </>
        ) : (
          <p style={{ color: '#aaa', padding: '20px' }}>No results found.</p>
        )}
      </div>
    </>
  );
};

export default Actor;
