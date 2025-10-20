export interface AnimeList {
  pagination: Pagination;
  data: Anime[];
  isLoading: boolean;
}

export interface AnimeDetail {
  data: Anime | null;
  isLoading: boolean;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: DatumType;
  source: Source;
  episodes: number | null;
  status: Status;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: Rating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: Season | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
}

export interface Aired {
  from: Date;
  to: Date | null;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day: null | string;
  time: null | string;
  timezone: Timezone | null;
  string: null | string;
}

export type Timezone = "Asia/Tokyo";

export interface Demographic {
  mal_id: number;
  type: DemographicType;
  name: string;
  url: string;
}

export type DemographicType = "anime";

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export type Rating =
  | "R - 17+ (violence & profanity)"
  | "PG-13 - Teens 13 or older"
  | "PG - Children"
  | "R+ - Mild Nudity";

export type Season = "spring" | "summer" | "fall";

export type Source = "Original" | "Manga" | "Light novel";

export type Status = "Finished Airing" | "Currently Airing";

export interface Title {
  type: TitleType;
  title: string;
}

export type TitleType =
  | "Default"
  | "Japanese"
  | "English"
  | "Synonym"
  | "German"
  | "Spanish"
  | "French";

export interface Trailer {
  youtube_id: null;
  url: null | string;
  embed_url: null | string;
  images: Images;
}

export interface Images {
  image_url: null;
  small_image_url: null;
  medium_image_url: null;
  large_image_url: null;
  maximum_image_url: null;
}

export type DatumType = "TV" | "Movie" | null;

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}
