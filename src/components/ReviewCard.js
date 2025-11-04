import React, { useState } from 'react';
import '../css/review-card.css';
import noavtatarImg from '../assets/no-avatar.png'

const ReviewCard = ({ author, content, rating, date, avatar }) => {
    const [showFull, setShowFull] = useState(false);

    const avatarUrl = avatar
        ? avatar.startsWith('/https')
            ? avatar.slice(1)
            : `https://image.tmdb.org/t/p/w45${avatar}`
        : noavtatarImg; 

    return (
        <div className="review-card">
            <img className="review-avatar" src={avatarUrl} alt={author} />
            <div className="review-body">
                <div className="review-header">
                    <span className="review-author">{author}</span>
                    {rating && <span className="review-rating">⭐ {rating}</span>}
                    <span className="review-date">{new Date(date).toLocaleDateString()}</span>
                </div>

                <p className="review-content">
                    {showFull ? content : content.length > 300 ? content.slice(0, 300) + '...' : content}
                </p>

                {content.length > 300 && (
                    <button className="review-toggle-btn" onClick={() => setShowFull(!showFull)}>
                        {showFull ? 'Hide full review' : 'Read full review'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ReviewCard;
