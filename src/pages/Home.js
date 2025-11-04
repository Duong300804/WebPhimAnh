import React from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../components/Button'
import {category, movieType, tvType} from '../api/tmdbApi'
import MovieList from '../components/MovieList'
import HeroSlide from '../components/HeroSlide'
import FilteredMovieList from '../components/FilteredMovieList'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../redux/AuthSlice'
import MovieListTrending from '../components/MovieListTrending'
import ThemeList from '../components/ThemeList'
import ThemeListKeyword from '../components/ThemeListKeyword'
import CompanyList from '../components/CompanyList'
import FilteredTvList from '../components/FilteredTvList'
import FilteredMovieByKeyword from '../components/FilteredMovieByKeyword'
import FilteredTvByKeyword from '../components/FilteredTvByKeyword'
import FilteredTvBySearchKeyword from '../components/FilteredTvBySearchKeyword'
import FilteredMovieBySearchKeyword from '../components/FilteredMovieBySearchKeyword'
import NetworkList from '../components/NetworkList'
import ThemeListDecade from '../components/ThemeListDecade'
import ThemeListAward from '../components/ThemeListAward'
import ThemeListSerie from '../components/ThemeListSerie'
import MovieListHorizontal from '../components/MovieListHorizontal'
import MovieListUpcoming from '../components/MovieListUpcoming'

const Home = () => {
  return (
    <div>    
          <HeroSlide/>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>🔥 Top 10 Trending TV Shows</h2>
                </div>
                <MovieListTrending mediaType="tv" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>🔥 Top 10 Trending Movies</h2>
                </div>
                <MovieListTrending mediaType="movie" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                      <h2>🎬 New in Theaters</h2>
                </div>
                <MovieListHorizontal category="movie" type="upcoming"/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Featured Topics</h2>
                </div>
                <ThemeList />
                </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Featured Keywords</h2>
                </div>
                <ThemeListKeyword/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Featured Movies</h2>
                    <Link to="/movie/type/popular">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.movie} type={movieType.popular} />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>🏆 Cinematic Excellence Awards</h2>
                </div>
               <ThemeListAward/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Top Rated Movies</h2>
                    <Link to="/movie/type/top_rated">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.movie} type={movieType.top_rated} />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>🎬 Iconic Movie Sagas</h2>
                </div>
                <ThemeListSerie/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Now Playing</h2>
                    <Link to="/movie/type/now_playing">
                    <OutlineButton>View More</OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.movie} type={movieType.now_playing} />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Upcoming Movies</h2>
                    <Link to="/movie/type/upcoming">
                    <OutlineButton>View More</OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.movie} type={movieType.upcoming} />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>🎬 Soon in Theaters</h2>
                </div>
                <MovieListUpcoming />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Popular TV Shows</h2>
                    <Link to="/tv/type/popular">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.tv} type={tvType.popular}/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Currently Airing TV Shows</h2>
                    <Link to="/tv/type/on_the_air">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <MovieList category={category.tv} type={tvType.on_the_air}/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Retro & Classic Eras</h2>
                </div>
                <ThemeListDecade/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Classic Cinema Collection</h2>
                    <Link to="/keyword/movie/303748/Classic Cinema Collection">
                    <OutlineButton>
                        View More
                    </OutlineButton>
                    </Link>
                </div>
                <FilteredMovieByKeyword keywordId="303748 " />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Featured Network</h2>
                </div>
                <NetworkList/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Animated Movies</h2>
                    <Link to="/movie/genre/16">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredMovieList genreId={16} />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Animated Series</h2>
                    <Link to="/tv/genre/16/country/US">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredTvList genreId={16} countryCode="US" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Western Animation </h2>
                    <Link to="/keyword/tv/290589/Western Animation">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredTvByKeyword keywordId="290589 " />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Top Animation Studios</h2>
                </div>
                <CompanyList/>
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Japanese Anime Movie</h2>
                    <Link to="/movie/genre/16/country/JP">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredMovieList genreId={16} countryCode="JP" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Japanese Anime Series </h2>
                    <Link to="/keyword/tv/207826/Shounen">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredTvByKeyword keywordId="207826" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Kamen Rider Series</h2>
                    <Link to="/search-keyword/Kamen Rider">
                    <OutlineButton>View More</OutlineButton>
                    </Link>
                </div>
                <FilteredTvBySearchKeyword query="Kamen Rider" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Ultraman Movies</h2>
                    <Link to="/search-keyword/Ultraman">
                    <OutlineButton>View More</OutlineButton>
                    </Link>
                </div>
                <FilteredMovieBySearchKeyword query="Ultraman" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Popular Tokusatsu Series</h2>
                    <Link to="/keyword/tv/317204/Tokusatsu">
                    <OutlineButton>
                        View More
                    </OutlineButton>
                    </Link>
                </div>
                <FilteredTvByKeyword keywordId="317204" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Action Korean Movies</h2>
                    <Link to="/movie/genre/28/country/KR">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredMovieList genreId={28} countryCode="KR" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Popular Korean Series</h2>
                    <Link to="/tv/country/KR">
                    <OutlineButton>
                        View More
                    </OutlineButton>
                    </Link>
                </div>
                <FilteredTvList genreId={18} countryCode="KR" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Action Hong Kong Movies</h2>
                    <Link to="/movie/genre/28/country/HK">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredMovieList genreId={28} countryCode="HK" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Drama Chinese Movies</h2>
                    <Link to="/movie/genre/18/country/CN">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredMovieList genreId={18} countryCode="CN" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Horror Thai Movies</h2>
                    <Link to="/movie/genre/27/country/TH">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredMovieList genreId={27} countryCode="TH" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>VietNam Movies</h2>
                    <Link to="/movie/country/VN">
                        <OutlineButton>
                            View More
                        </OutlineButton>
                    </Link>
                </div>
                <FilteredMovieList countryCode="VN" />
            </div>

            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Popular VietNam Series</h2>
                    <Link to="/tv/country/VN">
                    <OutlineButton>
                        View More
                    </OutlineButton>
                    </Link>
                </div>
                <FilteredTvList genreId={18} countryCode="VN" />
            </div>

    </div>

  )
}

export default Home