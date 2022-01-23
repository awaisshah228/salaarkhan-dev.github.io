import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectorTheme = (state) => state.theme.theme;
