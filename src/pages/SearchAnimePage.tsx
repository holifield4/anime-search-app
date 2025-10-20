import { useDispatch, useSelector } from "react-redux";
import AnimeCard from "../components/card/AnimeCard";
import SearchField from "../components/textfield/SearchField";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getAnimeAsync } from "../store/anime/anime.slice";
import LoadingIndicator from "../components/loading/LoadingIndicator";
import NotFound from "../components/loading/NotFound";
import AnimePagination from "../components/pagination/AnimePagination";

const SearchAnimePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const animeList = useSelector((state: RootState) => state.anime);
  const [queries, setQueries] = useState<string>("");
  const [debouncedQueries, setDebouncedQueries] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQueries(queries);
    }, 250);

    return () => clearTimeout(timer);
  }, [queries]);

  useEffect(() => {
    dispatch(getAnimeAsync({q: debouncedQueries, page: currentPage}));
  }, [dispatch, debouncedQueries, currentPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueries(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-full flex flex-col py-8 px-6 gap-6">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <SearchField value={queries} onChange={handleSearchChange} />
        <AnimePagination pagination={animeList.pagination} onPageChange={handlePageChange} isLoading={animeList.isLoading}/>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {animeList.isLoading ? (
          <div className="flex justify-center items-center">
            <LoadingIndicator />
          </div>
        ) : animeList.data.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-8">
            {animeList.data.map((anime) => (
              <AnimeCard
                key={anime.mal_id}
                mal_id={anime.mal_id}
                title={anime.title}
                type={anime.type}
                images={anime.images}
                episodes={anime.episodes}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <NotFound />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAnimePage;
