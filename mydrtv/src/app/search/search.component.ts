import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FilmRestService} from "../services/film-rest.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

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
