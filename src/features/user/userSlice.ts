import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserParams } from '../../types';

const initialState: UserParams = {
  username: '',
  password: '',
  email: '',
  characters: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<UserParams>) => {
      const user = action.payload;
      state.username = user.username;
      state.password = user.password;
      state.email = user.email;
      state.characters = user.characters;
    },
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.email = '';
      state.characters = [1];
    },
  },
});

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
