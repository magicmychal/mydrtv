import { Component, OnInit } from '@angular/core';
import {FilmRestService} from "../../services/film-rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {log} from "util";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public filmId: string;
  film: any;
  notFound: string;
  constructor(
    public rest: FilmRestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Get the ID of the movie from the parameter
    this.filmId = this.route.snapshot.params.id;
    console.log('film id is: ', this.filmId);
    this.rest.getMovie(this.filmId).subscribe({
      next: x => this.film = x,
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
    }, 3000);  //3s
  }
}
