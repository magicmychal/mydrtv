import { Component, OnInit } from '@angular/core';
import {GetMoviesService} from "../services/get-movies.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit {
  films: any;
  notFound: string;

  constructor(
    public rest: GetMoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
