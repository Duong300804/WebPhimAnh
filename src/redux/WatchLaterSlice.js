import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: []
};

const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState,
  reducers: {
    addToWatchLater: (state, action) => {
      const movie = action.payload;
      const exists = state.movies.find(item => item.id === movie.id);
      if (!exists) {
        state.movies.unshift(movie);
      }
    },
    removeFromWatchLater: (state, action) => {
      state.movies = state.movies.filter(item => item.id !== action.payload.id);
    },
    resetWatchLater: () => initialState
  }
});

export const { addToWatchLater, removeFromWatchLater, resetWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
