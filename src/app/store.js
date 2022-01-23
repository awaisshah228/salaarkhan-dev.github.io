import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import reposReducer from "../features/repos/reposSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    repos: reposReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
