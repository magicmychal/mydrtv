import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCarouselComponent } from './movie-carousel.component';
import { MoviesCardComponent } from '../movies-card/movies-card.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

fdescribe('MovieCarouselComponent', () => {
  let component: MovieCarouselComponent;
  let fixture: ComponentFixture<MovieCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      declarations: [ 
        MovieCarouselComponent,
        MoviesCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
