import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SelectedMovieService {
  private subjectSelectedMovie = new BehaviorSubject({});

  public get selectedMovie(): any {
    return (this.subjectSelectedMovie || { value: localStorage.getItem(environment.localStorageSelectedMovie) }).value;
  }

  constructor() {}

  changeSelectedMovie(selectedMovie: any): void {
    this.subjectSelectedMovie.next(selectedMovie);
    localStorage.setItem(environment.localStorageSelectedMovie, selectedMovie);
  }
}
