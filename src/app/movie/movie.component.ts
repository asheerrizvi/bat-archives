import { Component, Input } from '@angular/core';
import { MovieDetails } from '../movie-details';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie!: MovieDetails;
}
