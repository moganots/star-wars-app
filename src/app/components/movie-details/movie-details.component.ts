import { Component, OnInit } from '@angular/core';
import { SelectedMovieService } from 'src/app/services/selected-movie-service/selected-movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [SelectedMovieService],
})
export class MovieDetailsComponent implements OnInit {
  constructor(public selectedMovieService: SelectedMovieService) {}
  ngOnInit(): void {}
}
