import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {FilmModel} from '../models/film.model';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  films: Observable<{films: FilmModel[]}>;

  constructor(
    private store: Store<{films: {films: FilmModel[]} }>,
    private http: HttpClient
  ) { }

  ngOnInit() {
    console.log('on init');
    this.films = this.store.select('films');
    console.log(this.films);
    console.log('load movie here');
    this.getMovie('5cd9655d19fcad52cc9bb9ad');
  }

  getMovie(filmId: string): any {
    let apiURL = 'http://localhost:3000/films/';
    console.log('GET' + filmId);
    this.http.get(apiURL + '/' + filmId).subscribe(res => console.log(res['Actors']));
  }
}
