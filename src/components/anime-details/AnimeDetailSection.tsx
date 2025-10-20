import type { Anime } from "../../types/anime.types";
import Badge from "../badge/Badge";
import Image from "../image-container/Image";
import TrailerPlayer from "../trailer-playback/TrailerPlayer";

interface AnimeDetailProps {
  data: Anime;
}

const AnimeDetailSection = ({ data }: AnimeDetailProps) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-8 text-ios-label-secondary dark:text-dark-label-2 text-sm transition-colors">
        <Image source={data.images.webp.image_url} />
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-2xl md:text-4xl font-bold text-ios-label-primary dark:text-dark-label transition-colors">
            {data.title}
          </h1>
          <span className="text-md font-semibold">
            Japanese title: {data.title_japanese}
          </span>
          <Badge label={data.type} rounded />
          <p className="text-justify leading-5 text-ellipsis">
            {data.synopsis}
          </p>
          <div className="flex flex-wrap gap-2 w-fit">
            <Badge label={`Year: ${data.year ?? "Unknown"}`} />
            {data.type === "TV" && data.episodes && (
              <Badge label={data.episodes + " Episodes"} />
            )}
            <Badge label={"Status: " + data.status} />
            <Badge label={"Rank: " + data.rank} />
            <Badge label={"Score: " + data.score} />
            <Badge label={"Rating: " + data.rating} />
          </div>
          <div className="flex gap-2">
            {data.genres.map((genre) => (
              <span
                className="px-4 py-1 border bg-ios-primary dark:bg-dark-primary border-ios-label-primary dark:border-dark-label text-ios-label-primary dark:text-dark-label rounded-lg transition-colors"
                key={genre.mal_id}
              >
                {genre.name}
              </span>
            ))}
          </div>
          <div className="flex gap-2 items-center text-[16px] font-semibold">
            <span>Studios:</span>
            {data.studios.map((studio) => (
              <span
                className="text-ios-blue underline capitalize"
                key={studio.name}
              >
                {studio.name}
              </span>
            ))}
          </div>
          <div className="w-full flex flex-col pt-2 gap-1.5">
            <span className="select-none">Watch Trailer</span>
            <TrailerPlayer title={data.title} trailer={data.trailer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailSection;
