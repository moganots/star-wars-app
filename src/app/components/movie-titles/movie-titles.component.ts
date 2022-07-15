import { Component, Input, OnInit } from '@angular/core';
import { SelectedMovieService } from 'src/app/services/selected-movie-service/selected-movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.component.html',
  styleUrls: ['./movie-titles.component.css'],
  providers: [SelectedMovieService],
})
export class MovieTitlesComponent implements OnInit {
  @Input() movies = [];

  constructor(public selectedMovieService: SelectedMovieService) {}

  ngOnInit(): void {}

  onButtonClickSelectMovie(selectedMovie): void {
    this.selectedMovieService.changeSelectedMovie(selectedMovie);
    localStorage.setItem(environment.localStorageSelectedMovie, selectedMovie);
  }
}
