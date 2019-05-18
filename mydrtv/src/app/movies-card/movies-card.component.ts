import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent implements OnInit {

  @Input('film') film: any;
  constructor() { }

  ngOnInit() {
  }

}
