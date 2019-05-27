import {Component, OnInit} from '@angular/core';
import {FilmRestService} from '../services/film-rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {VgAPI} from 'videogular2/core';
import {Globals} from '../globals';
import {Store} from '@ngrx/store';
import {FilmModel} from '../models/film.model';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    // filmId used to determine which movie to play
    public filmId: string;
    // it's the object that is returned in an observable
    film: any;
    // it's the string to display when the movie is not found
    notFound: string
    // videoApi based on the Videgular2 documentation
    videoApi:VgAPI;

    constructor(
        public rest: FilmRestService,
        private route: ActivatedRoute,
        private router: Router,
        private globals: Globals,
        private store: Store<FilmModel>
    ) {
        this.globals.hideNavBar = true;
    }

    ngOnInit() {

        /*
        OBS: If the movie is available in the state
        then that's enough to get necessary information.
        If the state is not created (for example, when the
        link was shared, then we need to get the movie either way.
         */
        // Get the movie from the store
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
        }, 3000);  //3s
    }

    onPlayerReady(videoApi:VgAPI) {
        this.videoApi = videoApi;
        this.videoApi.play();
    }
}
