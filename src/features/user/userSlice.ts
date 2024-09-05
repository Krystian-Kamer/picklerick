import { createSlice } from '@reduxjs/toolkit';
import { UserParams } from '../../types';

const initialState: UserParams = {
  username: 'Morty',
  password: 'mortymorty',
  email: 'mortymorty@gmail.com',
  charactersList: [1, 2, 3, 4],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.email = '';
      state.charactersList = [];
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
