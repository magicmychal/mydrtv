import { Component, OnInit } from '@angular/core';
import {FilmRestService} from '../services/film-rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as FilmActions from '../redux/film-state-management/films.actions';
import {FilmModel} from '../models/film.model';
import {Film} from "../entities/films";

@Component({
  selector: 'app-details',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  public filmId: string;
  film: FilmModel;
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
    if(this.filmId == undefined){
      this.filmId = '5cd9655d19fcad52cc9bb9ad'; 
    }
    console.log('film id is: ', this.filmId);
    // Get movie and save it to the state. It'll be used also in the player
    this.rest.getMovie(this.filmId).subscribe({
      next: result => this.store.dispatch(new FilmActions.GetMovieById(result)),
      error: err => this.filmNotFound(),
      complete: () => console.log('done')
    });
    // Assign movie to the variable that you can use AKA SUBSCRIBE
    this.store.select('films').subscribe({
      next: film => this.film = film
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
