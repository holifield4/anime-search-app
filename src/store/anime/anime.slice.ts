import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { AnimeList } from "../../types/anime.types";
import { AnimeService } from "../../services/anime/anime.service";

const initialState: AnimeList = {
  pagination: {
    last_visible_page: 1,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 0,
      total: 0,
      per_page: 10,
    },
  },
  data: [],
  isLoading: false,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnimeAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAnimeAsync.fulfilled,
      (state, action: PayloadAction<AnimeList>) => {
        state.pagination = action.payload.pagination;
        state.data = action.payload.data;
        state.isLoading = false;
      }
    );
  },
});

export const getAnimeAsync = createAsyncThunk(
  "anime/getAnimeAsync",
  async (params: { q: string; page: number }) => {
    return await AnimeService.getAllAnime(params.q, params.page);
  }
);

export default animeSlice.reducer;
