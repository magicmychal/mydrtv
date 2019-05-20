import {Component, OnInit} from '@angular/core';
import {FilmRestService} from '../services/film-rest.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    public filmId: string;
    films: any = [];
    film: any;
    notFound: string;

    constructor(
        public rest: FilmRestService,
        private route: ActivatedRoute,
        private router: Router
    ) {
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
}
