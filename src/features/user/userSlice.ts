import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  password: null,
  email: null,
  charactersList: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
});


export default userSlice.reducer