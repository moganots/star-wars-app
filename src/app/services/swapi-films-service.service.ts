import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as ObservableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SwapiFilmsService {
  endpoint = 'https://swapi.py4e.com/api/films/';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<any[]> {
    return this.httpClient.get(this.endpoint).pipe(
      map((data: any) => data?.results),
      catchError((error) => this.handleError(error))
    );
  }
  // tslint:disable-next-line:typedef
  handleError(error) {
    const errorMessage =
      (error || { message: 'An error has occured' }).message ||
      'An error has occured';
    return ObservableThrowError(errorMessage);
  }
}
