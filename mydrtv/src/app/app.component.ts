import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, RouterStateSnapshot} from '@angular/router';
import {Globals} from './globals';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Globals]
})
export class AppComponent implements OnInit {
    title = 'mydrtv';

    constructor(public router: Router,
                private route: ActivatedRoute,
                private globals: Globals) {
    }

    ngOnInit() {
    }
}

