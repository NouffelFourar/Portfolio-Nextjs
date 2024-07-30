import { createSlice } from '@reduxjs/toolkit';
import { getUsers, addUser, findUser } from '../components/data'; // Adjust path if necessary

const initialState = {
  isLoggedIn: false,
  currentUser: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { username, password } = action.payload;
      if (getUsers().some(user => user.username === username)) {
        return; // User already exists, handle as needed
      }
      addUser({ username, password });
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const user = findUser(username, password);
      if (user) {
        state.isLoggedIn = true;
        state.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        state.isLoggedIn = false;
        state.currentUser = null;
      }
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
      localStorage.removeItem('currentUser');
    },
    restoreLoginState: (state) => {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        state.isLoggedIn = true;
        state.currentUser = JSON.parse(storedUser);
      }
    }
  }
});

export const { registerUser, loginUser, logoutUser, restoreLoginState } = userSlice.actions;
export default userSlice.reducer;
 