import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { MovieDetails } from './movie-details';
import { Movies } from './movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovieDetails(imdbID: string): Observable<MovieDetails> {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=e7cf5650`;
    return this.http.get<MovieDetails>(url);
  }

  getMovies(): Observable<MovieDetails[]> {
    const url = `https://www.omdbapi.com/?s=batman&apikey=e7cf5650`;
    return this.http.get<Movies>(url).pipe(
      switchMap((response: Movies) => {
        const movies = response.Search.map((movie) => {
          return this.getMovieDetails(movie.imdbID);
        });
        return forkJoin(movies);
      })
    );
  }
}
