import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import tmdbApi from '../api/tmdbApi';
import { OutlineButton } from './Button';

const ReviewList = ({ id, type = 'movie' }) => {
    const [allReviews, setAllReviews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5); 
    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);


    const fetchReviews = async (pageToLoad) => {
        setLoading(true);
        try {
            const res =
                type === 'movie'
                    ? await tmdbApi.getMovieReviews(id, { page: pageToLoad })
                    : await tmdbApi.getTvReviews(id, { page: pageToLoad });

            setAllReviews((prev) => [...prev, ...(res.results || [])]);
            setTotalPages(res.total_pages || 1);
            setTotalResults(res.total_results || 0);
        } catch (error) {
            console.error('❌ Failed to fetch reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setAllReviews([]);
        setVisibleCount(5);
        setPage(1);
        fetchReviews(1);
    }, [id, type]);

    const loadMore = async () => {
        if (visibleCount >= allReviews.length && page < totalPages) {
            const nextPage = page + 1;
            await fetchReviews(nextPage);
            setPage(nextPage);
        }

        setVisibleCount((prev) => prev + 5);
    };

    const visibleReviews = allReviews.slice(0, visibleCount);

    if (loading && allReviews.length === 0) return <p>⏳ Loading reviews...</p>;
    if (allReviews.length === 0) return <p>😔 No reviews yet.</p>;

    return (
        <>
            <div className="review-list">
                {visibleReviews.map((item) => (
                    <ReviewCard
                        key={item.id}
                        author={item.author}
                        content={item.content}
                        rating={item.author_details?.rating}
                        date={item.created_at}
                        avatar={item.author_details?.avatar_path}
                    />
                ))}
            </div>

            {(visibleCount < allReviews.length || page < totalPages) && (
                <div className="movie-grid__loadmore">
                    <OutlineButton className="small" onClick={loadMore} disabled={loading}>
                        {loading ? 'Loading...' : 'Load more'}
                    </OutlineButton>
                </div>
            )}

            <p style={{ color: 'lime' }}>
              Showing {visibleReviews.length} / {totalResults} reviews
            </p>
        </>
    );
};

export default ReviewList;
