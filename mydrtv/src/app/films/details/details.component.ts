import { Component, OnInit } from '@angular/core';
import {FilmRestService} from "../../services/film-rest.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  films:any = [];
  constructor(
    public filmRest: FilmRestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
