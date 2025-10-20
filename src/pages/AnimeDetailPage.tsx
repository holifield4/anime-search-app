import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { getAnimeByIdAsync } from "../store/anime/anime.detail.slice";
import LoadingIndicator from "../components/loading/LoadingIndicator";
import AnimeDetailSection from "../components/anime-details/AnimeDetailSection";
import NotFound from "../components/loading/NotFound";

const AnimeDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const animeDetail = useSelector((state: RootState) => state.animeDetail);

  useEffect(() => {
    if (params.id) {
      dispatch(getAnimeByIdAsync(params.id));
    }
  }, [dispatch, params.id]);

  if (animeDetail.isLoading) {
    return (
      <div className="min-h-full flex justify-center items-center">
        <LoadingIndicator />
      </div>
    );
  }

  if (!animeDetail.data || animeDetail.data === null) {
    return (
      <div className="min-h-full flex justify-center items-center">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="min-h-full flex flex-col py-8 px-6">
      <div className="flex-1 flex items-center justify-center">
        <AnimeDetailSection data={animeDetail.data} />
      </div>
    </div>
  );
};

export default AnimeDetailPage;
