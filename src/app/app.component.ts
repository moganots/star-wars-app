import { Component, OnInit } from '@angular/core';
import { SwapiFilmsService } from './services/swapi-films-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-sample-app';
  message = 'Please wait, loading...';
  isShowSpinner = true;
  movies = [];
  selectedMovie: any;

  constructor(public filmsService: SwapiFilmsService) {}
  ngOnInit(): void {
    this.filmsService
      .getAll()
      .toPromise()
      .then((data) => {
        this.movies = data;
        this.isShowSpinner = false;
      });
    this.sleep(10000);
  }
  sleep(ms): any {
    return new Promise((resolve) => setTimeout(ms));
  }
  setSelectedMovie(movie): void {
    this.selectedMovie = movie;
  }
}
