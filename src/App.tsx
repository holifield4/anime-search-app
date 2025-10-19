import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import { lazy } from "react";

const AnimeSearchPage = lazy(() => import("./pages/SearchAnimePage"));
const AnimeDetailPage = lazy(() => import("./pages/AnimeDetailPage"));

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<AnimeSearchPage />} />
          <Route path="/details" element={<AnimeDetailPage />} />\
          <Route
            path="*"
            element={
              <div className="w-full h-full flex items-center justify-center">
                <h1 className="text-2xl font-bold">Page not found</h1>
              </div>
            }
          />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
