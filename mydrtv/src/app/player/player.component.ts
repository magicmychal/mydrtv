import {Component, Input, OnInit} from '@angular/core';
import {FilmRestService} from '../services/film-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {error} from "selenium-webdriver";


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public filmId: string;
  films: any = [];
  film: any;
  constructor(
    public rest: FilmRestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //this.getMovie();
    this.filmId = this.route.snapshot.params.id;
    // this.rest.getMovie('5cd9655d19fcad52cc9bb9ad').subscribe(
    //   (data: {}) => {
    //     console.log(data);
    //     this.film = data;
    //   });
    this.rest.getMovie(this.filmId).subscribe({
      next: x => this.film = x,
      error: err => console.error(err),
      complete: () => console.log('done')
    });
  }

  filmNotFound() {

  }

  getMovie() {
    this.films = [];
    this.rest.getMovie('5cd9655d19fcad52cc9bb9ad').subscribe((data: {}) => {
      console.log(data);
      console.log('huj mi w pupe');
      this.films = data;
    });
  }
}
