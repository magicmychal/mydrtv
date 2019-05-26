import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCardComponent } from './movies-card.component';
import { HomeComponent } from '../home/home.component';
import { MovieCarouselComponent } from '../movie-carousel/movie-carousel.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesCardComponent', () => {
  let component: MoviesCardComponent;
  let fixture: ComponentFixture<MoviesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      declarations: [ 
        MoviesCardComponent,
        MovieCarouselComponent,
        HomeComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
