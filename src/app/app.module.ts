import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSpinnerComponent } from './components/app-spinner/app-spinner.component';
import { SwapiFilmsService } from './services/swapi-films-service/swapi-films-service.service';
import { MovieTitlesComponent } from './components/movie-titles/movie-titles.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SelectedMovieService } from './services/selected-movie-service/selected-movie.service';

@NgModule({
  declarations: [AppComponent, AppSpinnerComponent, MovieTitlesComponent, MovieDetailsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpClientModule, SwapiFilmsService, SelectedMovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
