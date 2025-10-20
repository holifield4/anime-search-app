import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/theme.slice"
import animeReducer from "./anime/anime.slice";
import animeDetailReducer from "./anime/anime.detail.slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    anime: animeReducer,
    animeDetail: animeDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
