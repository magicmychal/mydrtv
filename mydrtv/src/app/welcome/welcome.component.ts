import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  preload:string = 'auto';
  api:VgAPI;


  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(api:VgAPI) {
    this.api = api;
    this.api.play();
  }

}
