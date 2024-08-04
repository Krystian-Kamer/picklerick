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
  status: string;
  type: string;
  url: string;
};

export type Pagination = {
  count: number;
  next: string;
  prev: string;
  pages: number;
};

export type CharacterResponse = {
  results: Character[];
  info: Pagination;
};
