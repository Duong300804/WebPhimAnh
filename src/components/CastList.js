import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../api/tmdbApi';
import { SwiperSlide, Swiper } from 'swiper/react';
import '../css/detail.css';

const CastList = props => {

    const { category } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 8));
        }
        getCredits();
    }, [category, props.id]);
    return (

        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        {/* <div className="casts__item__img" style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}></div> */}
                        <div
                            className="casts__item__img"
                            style={{
                                backgroundImage: `url(${process.env.REACT_APP_IMAGE_W500}${item.profile_path})`
                            }}
                            ></div>

                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>

    );
}

export default CastList;