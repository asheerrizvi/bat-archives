export interface SearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Search {
  Search: SearchResult[];
  totalResults: string;
  Response: string;
}
