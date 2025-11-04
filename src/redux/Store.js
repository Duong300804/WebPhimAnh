import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice'
import recentlyWatchedReducer from './RecentlyWatchedSlice';
import favoritesReducer from './FavoritesSlice';
import watchLaterReducer from './WatchLaterSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    recentlyWatched: recentlyWatchedReducer,
    favorites: favoritesReducer,
    watchLater: watchLaterReducer,
  },
});

export default store;
