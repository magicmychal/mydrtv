import { Component, OnInit } from '@angular/core';
import {FilmRestService} from '../services/film-rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as FilmActions from '../redux/film-state-management/films.actions';
import {FilmModel} from "../models/film.model";

@Component({
  selector: 'app-details',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  public filmId: string;
  film: any;
  notFound: string;
  constructor(
    public rest: FilmRestService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<FilmModel>
  ) { }

  ngOnInit() {
    // Get the ID of the movie from the parameter
    this.filmId = this.route.snapshot.params.id;
    console.log('film id is: ', this.filmId);
    this.rest.getMovie(this.filmId).subscribe({
      next: result => {
        this.store.dispatch(new FilmActions.GetMovieById(result));
        this.film = result;
        console.log('this is the film', result)},
      error: err => this.filmNotFound(),
      complete: () => console.log('done')
    });
  }
  // if the film was not found in the database
  // user is redirected to the homepage
  filmNotFound() {
    this.notFound = 'Movie not found. You will be redirected to the main page in a moment...';
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);  // 3s
  }
}
