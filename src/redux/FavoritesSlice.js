import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      const exists = state.movies.find(item => item.id === movie.id);
      if (!exists) {
        state.movies.unshift(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      state.movies = state.movies.filter(item => item.id !== action.payload.id);
    },
    resetFavorites: () => initialState
  }
});

export const { addToFavorites, removeFromFavorites, resetFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
