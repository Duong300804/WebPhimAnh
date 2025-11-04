import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Detail from '../pages/Detail'
import SignIn from '../pages/SignIn'
import Theme from '../pages/Theme'
import Keyword from '../pages/Keyword'
import Actor from '../pages/Actor'
import ActorDetail from '../pages/ActorDetail'
import SearchKeyword from '../pages/SearchKeyword'
import Account from '../pages/Account'
import RecentlyWatched from '../pages/RecentlyWatched'
import Filter from '../pages/Filter'
import Favourites from '../pages/Favourites'
import WatchLater from '../pages/WatchLater'
import Director from '../pages/Director'
import DirectorDetail from '../pages/DirectorDetail'
import ListPage from '../pages/List'
import ListDetailPage from '../pages/ListDetail'

const AppRoutes = () => {
  return (
    <Routes>
        <Route 
            path='/'
            exact
            element={<Home/>} 
        />
        <Route 
            path='/signin'
            exact
            element={<SignIn/>} 
        />
        <Route 
            path='/filter'
            exact
            element={<Filter/>} 
        />
        <Route 
            path='/account'
            exact
            element={<Account/>} 
        />
        <Route 
            path='/list'
            exact
            element={<ListPage/>} 
        />
        <Route 
            path='/list/:id'
            exact
            element={<ListDetailPage/>} 
        />
        <Route 
            path='/recent'
            exact
            element={<RecentlyWatched/>} 
        />
        <Route 
            path="/favorites" 
            element={<Favourites/>} 
        />
        <Route 
            path="/watch-later" 
            element={<WatchLater/>} 
        />
        <Route 
            path='/actors/search/:keyword'
            element={<Actor/>} 
        />
        <Route 
            path='/actors'
            element={<Actor/>} 
        />
        <Route 
            path='/directors'
            element={<Director/>} 
        />
        <Route 
            path='/directors/:id'
            element={<DirectorDetail/>} 
        />
        <Route 
            path="/actor/:id" 
            element={<ActorDetail />} 
        />
        <Route
            path="/theme/:type/:id/:name" 
            element={<Theme/>}
        />
        <Route 
            path="/search-keyword/:keyword" 
            element={<SearchKeyword />} 
        />
        <Route 
            path="/keyword/:category/:id/:name" 
            element={<Keyword />} 
        />
        <Route 
            path="/:category/genre/:genreId/country/:countryCode" 
            element={<Catalog />} 
        />
        <Route 
            path="/:category/genre/:genreId" 
            element={<Catalog />} 
        />
        <Route 
            path="/:category/country/:countryCode" 
            element={<Catalog />} 
        />
        <Route 
            path='/:category/search/:keyword'
            element={<Catalog/>} 
        />
        <Route 
            path='/:category/:id'
            element={<Detail/>} 
        />
        <Route 
            path='/:category/type/:type'
            element={<Catalog/>} 
        />
        <Route 
            path='/:category'
            element={<Catalog />} 
        />
    </Routes>


  )
}

export default AppRoutes;