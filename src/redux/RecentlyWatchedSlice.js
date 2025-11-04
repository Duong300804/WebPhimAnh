import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: []
};

const recentlyWatchedSlice = createSlice({
  name: 'recentlyWatched',
  initialState,
  reducers: {
    addToRecentlyWatched: (state, action) => {
      const movie = action.payload;
     
      const exists = state.movies.find(item => item.id === movie.id);
      if (!exists) {
        state.movies.unshift(movie); 
        // if (state.movies.length > 10) {
        //   state.movies.pop(); 
        // }
      }
    },
    resetRecentlyWatched: () => initialState
  }
});

export const { addToRecentlyWatched, resetRecentlyWatched } = recentlyWatchedSlice.actions;

export default recentlyWatchedSlice.reducer;
