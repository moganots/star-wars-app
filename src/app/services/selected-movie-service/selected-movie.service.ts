import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedMovieService {
  private subjectSelectedMovie = new BehaviorSubject({});

  public get selectedMovie(): any {
    return (this.subjectSelectedMovie || { value: {} }).value;
  }

  constructor() {}

  changeSelectedMovie(selectedMovie: any): void {
    this.subjectSelectedMovie.next(selectedMovie);
  }
}
