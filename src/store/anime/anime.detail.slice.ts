import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { AnimeDetail } from "../../types/anime.types";
import { AnimeService } from "../../services/anime/anime.service";

const initialState: AnimeDetail = {
  data: null,
  isLoading: false,
};

const animeDetailSlice = createSlice({
  name: "animeDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnimeByIdAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAnimeByIdAsync.fulfilled,
      (state, action: PayloadAction<AnimeDetail>) => {
        state.data = action.payload.data;
        state.isLoading = false;
      }
    );
  },
});

export const getAnimeByIdAsync = createAsyncThunk(
  "anime/getAnimeByIdAsync",
  async (id: string) => {
    const res = await AnimeService.getAnimeById(id);
    return res;
  }
);

export default animeDetailSlice.reducer;
