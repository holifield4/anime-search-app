import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppTheme {
  darkMode: boolean;
}

const initialState: AppTheme = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const changeTheme = (darkMode: boolean) => {
  localStorage.setItem("themeMode", darkMode ? "dark" : "light"); 
  return themeSlice.actions.changeTheme(darkMode);
};

export default themeSlice.reducer;