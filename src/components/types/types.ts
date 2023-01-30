export type NewsData = {
  urlToImage: string;
  author: string;
  source: {
    name: string;
  };
  publishedAt: string;
  title: string;
  description: string;
  url: string;
};

export type SourceData = {
  name: string;
  id: string;
};

export type CallbackHandler<T> = (data: T) => void;

export interface INews {
  articles: NewsData[];
  sources: SourceData[];
}

export enum Endpoints {
  everything = 'everything',
  topHeadlines = 'top-headlines',
  sources = 'sources',
}

export enum Methods {
  post = 'POST',
  get = 'GET',
}
