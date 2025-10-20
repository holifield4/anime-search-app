import { useNavigate } from "react-router-dom";
import type { Anime } from "../../types/anime.types";

interface AnimeCardProps
  extends Pick<Anime, "mal_id" | "title" | "type" | "images" | "episodes"> {}

const AnimeCard = ({
  mal_id,
  title,
  type,
  images,
  episodes,
}: AnimeCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/anime/details/${mal_id}`);
  };

  return (
    <div
      className="relative overflow-hidden w-50 h-60 md:w-60 md:h-80 rounded-3xl cursor-pointer bg-cover bg-center shadow-md hover:shadow-lg shadow-ios-label-secondary hover:scale-105 group transition-all duration-300"
      style={{
        backgroundImage: `url('${images.webp.image_url}')`,
      }}
      onClick={handleClick}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <div className="flex justify-between items-center">
          {type !== null && (
            <span className="bg-ios-blue px-3 py-1 rounded-full text-sm font-semibold">
              {type}
              {type === "TV" &&
                episodes !== null &&
                " - " + episodes + " Episodes"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
