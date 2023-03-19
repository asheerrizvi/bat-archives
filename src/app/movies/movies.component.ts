import { Component } from '@angular/core';
import { MovieDetails } from '../movie-details';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  movies: MovieDetails[] = [];
  filteredMovies: MovieDetails[] = [];
  filteredDecade: number | undefined = undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.filteredMovies = movies;
    });
  }

  filterMovies(decade?: number) {
    if (!decade) {
      this.filteredMovies = this.movies;
      this.filteredDecade = undefined;
    } else {
      this.filteredMovies = this.movies.filter((movie) => {
        const movieYears = movie.Year.split('-');
        return movieYears
          .map((year) => Number(year))
          .every((year) => year >= decade && year < decade + 10);
      });
      this.filteredDecade = decade;
    }
  }
}
