import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTitlesComponent } from './movie-titles.component';

describe('MovieTitlesComponent', () => {
  let component: MovieTitlesComponent;
  let fixture: ComponentFixture<MovieTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
