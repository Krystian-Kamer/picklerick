export type Category = {
  name: string;
  path: string;
  img: string;
};

export type Title = {
  title: string;
};

export type Character = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
  type: 'Female' | 'Male' | 'Genderless' | 'unknown';
  url: string;
};

export type Pagination = {
  count: number;
  next: string;
  prev: string;
  pages: number;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type Episode = {
  id: number;
  name: string;
  url: string;
  created: string;
  air_date: string;
  characters: string[];
  episode: string;
};

type RandomCharacterResponse = {
  characters: Character[];
};

export type CharacterParams = {
  name: string;
  gender: string;
  status: string;
};

export type LocationResponse = {
  results: Location[];
  info: Pagination;
  characters: Character[];
  singleLocation: Location;
};

export type EpisodeResponse = {
  results: Episode[];
  info: Pagination;
  characters: Character[];
  singleEpisode: Episode;
};

export type LoaderDataResponse =
  | RandomCharacterResponse
  | LocationResponse
  | EpisodeResponse;

export type UserParams = {
  email: string;
  password: string;
  username: string;
  charactersList: number[];
};
