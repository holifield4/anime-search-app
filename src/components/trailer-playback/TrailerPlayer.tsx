import { VideoOff } from "../../lib/icons/VideoOff";
import type { Trailer } from "../../types/anime.types";

interface TrailerPlayerProps {
  title: string;
  trailer: Trailer;
  muted?: boolean;
  controls?: boolean;
}

const TrailerPlayer = ({
  trailer,
  title,
  muted = false,
  controls = true,
}: TrailerPlayerProps) => {
  if (!trailer.embed_url) {
    return (
      <div className="flex justify-center md:justify-start w-full">
        <div className="w-full md:w-1/2 bg-slate-300 p-8 flex flex-col items-center justify-center text-center text-ios-label-primary">
          <div className="w-16 h-16 animate-pulse bg-slate-400 rounded-full flex items-center justify-center mb-4">
            <VideoOff />
          </div>
          <h3 className="font-semibold mb-2">No Trailer</h3>
          <p className="text-sm">
            Trailer not available for this anime
          </p>
        </div>
      </div>
    );
  }

  const embedUrl = new URL(trailer.embed_url);
  embedUrl.searchParams.set("autoplay", "0");
  embedUrl.searchParams.set("mute", muted ? "1" : "0");
  embedUrl.searchParams.set("controls", controls ? "1" : "0");

  return (
    <div className="w-full flex justify-center md:justify-start">
      <iframe
        src={embedUrl.toString()}
        title={`${title} Trailer`}
        className="w-full md:w-3/4 h-[30rem]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default TrailerPlayer;
