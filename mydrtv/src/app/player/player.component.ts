import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FilmModel} from '../models/film.model';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {FilmRestService} from '../services/film-rest.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  films: any = [];
  film: any;
  constructor(
    public rest: FilmRestService
  ) { }

  ngOnInit() {
    //this.getMovie();
    this.rest.getMovie('5cd9655d19fcad52cc9bb9ad').subscribe((data: {}) => {
      console.log(data);
      this.film = data;
    });
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
