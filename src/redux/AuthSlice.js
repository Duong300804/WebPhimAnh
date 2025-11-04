import { createSlice } from '@reduxjs/toolkit';

const DATABASE = {
  username : 'abc',
  password: '123456'
}

export const getDatabase = () => DATABASE;

const initialState = {
  username: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    reset : () => initialState
  },
});

export const { setCredentials, reset } = authSlice.actions;

export default authSlice.reducer;
