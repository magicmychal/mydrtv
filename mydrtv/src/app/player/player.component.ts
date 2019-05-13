import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {FilmModel} from '../models/film.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  films: Observable<{films: FilmModel[]}>;

  constructor(private store: Store<{films: {films: FilmModel[]} }>) { }

  ngOnInit() {
    console.log('on init');
    this.films = this.store.select('films');
    console.log(this.films);
  }

}
