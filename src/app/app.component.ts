import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SelectedMovieService } from './services/selected-movie-service/selected-movie.service';
import { SwapiFilmsService } from './services/swapi-films-service/swapi-films-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SwapiFilmsService, SelectedMovieService],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-sample-app';
  isLoading = true;
  movies = [];

  constructor(
    public swapiFilmsService: SwapiFilmsService,
    public selectedMovieService: SelectedMovieService
  ) {}

  ngOnInit(): void {
    this.swapiFilmsService
      .getAll()
      .toPromise()
      .then((data) => {
        this.movies = data;
        this.isLoading = false;
      });
    localStorage.setItem(environment.localStorageSelectedMovie, {});
    this.sleep(10000);
  }

  sleep(ms): any {
    return new Promise((resolve) => setTimeout(ms));
  }

  ngOnDestroy(): void {
    localStorage.removeItem(environment.localStorageSelectedMovie);
  }
}
