import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../css/header.css';
import logo from '../assets/tmovie.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { reset } from '../redux/AuthSlice';
import MovieGenreDropdown from './MovieGenreDropdown';
import CountryDropdown from './CountryDropdown';
import TvGenreDropdown from './TvGenreDropdown';


const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);

    const active = headerNav.findIndex(e => e.path === pathname);

    const handleSignOut = () => {
        dispatch(reset());
    };
    /**
     * Lăn chuột xuống một khoảng thì thay đổi navbar
     */
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">XemPhim</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }

                    <li className="header__nav-item dropdown">
                        <span className="dropdown-toggle">Film</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/movie">Movies</Link></li>
                            <li><Link to="/tv">TV Series</Link></li>
                        </ul>
                    </li>  

                    <li className="header__nav-item dropdown">
                        <span className="dropdown-toggle">People</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/actors">Actors</Link></li>
                            <li><Link to="/directors">Directors</Link></li>
                        </ul>
                    </li>   

                    <li className="header__nav-item dropdown">
                        <span className="dropdown-toggle">Explore</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/filter">Filter</Link></li>
                            <li><Link to="/list">List</Link></li>
                        </ul>
                    </li>  
 
                        <MovieGenreDropdown/>
                        <TvGenreDropdown/>
                        <CountryDropdown/>

                    {!auth.username && (
                        <li className={`${pathname === '/signin' ? 'active' : ''}`}>
                            <Link to="/signin">Sign In</Link>
                        </li>
                    )}

                    {auth.username && (
                        <>
                            <li className="header__nav-item header__nav-user">
                            <span className="header__nav-user-toggle">Hello, {auth.username} ▼</span>
                            <ul className="header__nav-user-menu">
                                <li>
                                <Link to="/account">👤 Account</Link>
                                </li>
                                <li>
                                <Link to="/recent">🎞 Recently Watched</Link>
                                </li>
                                <li>
                                <Link to="/favorites">❤️ Favorites</Link>
                                </li>
                                <li>
                                <Link to="/watch-later">⏰ Watch Later</Link>
                                </li>
                                <li>
                                <span onClick={handleSignOut}>🚪 Sign Out</span>
                                </li>
                            </ul>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Header;