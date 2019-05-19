import { Component, OnInit } from '@angular/core';
import {FilmRestService} from "../services/film-rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit {
  private genres;
  films: any;
  notFound: string;

  constructor(
    public rest: FilmRestService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.genres = ["Comedy", "Thriller", "Crime", "Drama", "War", "Biography", "History", "Romance", "Family"];
   }

  ngOnInit() {
    this.rest.getMovies().subscribe({
      next: x => this.films = x,
      error: err => this.filmNotFound(),
      complete: () => console.log('done')
    });
  }
  filmNotFound() {
    this.notFound = 'Movie not found. You will be redirected to the main page in a moment...';
  }
}
