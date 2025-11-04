import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tmdbApi from '../api/tmdbApi';

const countryNameMap = {
    US: 'USA',
    KR: 'Korea',
    JP: 'Japan',
    VN: 'Vietnam',
    CN: 'China',
    IN: 'India',
    FR: 'France',
    DE: 'Germany',
    GB: 'UK',
    TH: 'Thailand',
    RU: 'Russia',
    IT: 'Italy',
    ES: 'Spain',
    ID: 'Indonesia',
    HK: 'Hong Kong',
    PH: 'Philippines'
};


const CountryDropdown = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await tmdbApi.getCountries();

                // Lọc ra các quốc gia phổ biến hoặc giới hạn số lượng hiển thị
                const popular = [
                    'US', 'KR', 'JP', 'VN', 'CN', 'IN', 'FR', 'DE', 'GB',
                    'TH', 'RU', 'IT', 'ES', 'ID', 'HK', 'PH'
                ];
                const filtered = res.filter(c => popular.includes(c.iso_3166_1));

                setCountries(filtered);
            } catch (err) {
                console.error('Failed to fetch countries:', err);
            }
        };

        fetchCountries();
    }, []);

    return (
        <li className="dropdown">
            <span className="dropdown-toggle">Countries</span>
            <ul className="dropdown-menu">
                {countries.map((country) => (
                    <li key={country.iso_3166_1}>
                        <Link to={`/movie/country/${country.iso_3166_1}`}>
                            {countryNameMap[country.iso_3166_1] || country.english_name}
                        </Link>
                    </li>
                ))}

            </ul>
        </li>
    );
};

export default CountryDropdown;
