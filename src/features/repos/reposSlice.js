import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  repos: [],
  isLoading: false,
  error: null,
};

const REPO_URL = "https://api.github.com/users/salaarkhan-dev/repos";

export const fetchRepos = createAsyncThunk(
  "repos/fetchRepos",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(REPO_URL);
      const data = response.data.map(({ name, html_url, created_at }) => {
        const updatedName = name.replace(/([^\w*]|[_*])/g, " ");
        return {
          name: updatedName,
          html_url,
          created_at,
        };
      });
      const sortedData = data.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      return await sortedData;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRepos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchRepos.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        repos: action.payload,
        error: null,
      };
    },
    [fetchRepos.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    },
  },
});

export default reposSlice.reducer;

export const selectorRepos = (state) => state.repos.repos;
export const selectorReposLoading = (state) => state.repos.isLoading;
