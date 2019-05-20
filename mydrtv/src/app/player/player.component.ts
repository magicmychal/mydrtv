import {Component, OnInit} from '@angular/core';
import {FilmRestService} from '../services/film-rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {VgAPI} from 'videogular2/core';
import {Globals} from '../globals';

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
        private globals: Globals
    ) {
        this.globals.hideNavBar = true;
    }

    ngOnInit() {

        // Get the ID of the movie from the parameter
        this.filmId = this.route.snapshot.params.id;
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

    onPlayerReady(videoApi:VgAPI) {
        this.videoApi = videoApi;
        this.videoApi.play();
    }
}
