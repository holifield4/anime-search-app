import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./store/theme/theme.slice";
import type { RootState } from "./store/store";
import PageNotFound from "./components/loading/PageNotFound";

const AnimeSearchPage = lazy(() => import("./pages/SearchAnimePage"));
const AnimeDetailPage = lazy(() => import("./pages/AnimeDetailPage"));

const App = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const themeDispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("themeMode") || "light";
    themeDispatch(changeTheme(savedTheme === "dark"));
  }, [themeDispatch]);

  return (
    <BrowserRouter>
      <div className={`${theme.darkMode ? "dark" : "ligt"}`}>
        <PageLayout>
          <Routes>
            <Route path="/" element={<AnimeSearchPage />} />
            <Route path="/anime/details/:id" element={<AnimeDetailPage />} />
            <Route
              path="*"
              element={
                <PageNotFound/>
              }
            />
          </Routes>
        </PageLayout>
      </div>
    </BrowserRouter>
  );
};

export default App;
