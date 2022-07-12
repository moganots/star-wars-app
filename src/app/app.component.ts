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
    this.filmsService.getAll().subscribe((data) => {
      data?.forEach(movie => this.movies.push(movie));
      this.isShowSpinner = false;
    });
    console.log(this.movies);
    this.sleep(5000);
  }
  // tslint:disable-next-line:typedef
  sleep(ms) {
    return new Promise((resolve) => setTimeout(ms));
  }
  // tslint:disable-next-line:typedef
  setSelectedMovie(movie) {
    this.selectedMovie = movie;
  }
}
