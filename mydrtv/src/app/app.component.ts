import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, RouterStateSnapshot} from '@angular/router';
import {Globals} from './globals';
import {Store} from "@ngrx/store";
import {UserModel} from "./models/user.model";
import * as NavbarActions from './redux/navbar/navbar.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Globals]
})
export class AppComponent implements OnInit {
    title = 'mydrtv';
    showNavBar: boolean;

    constructor(public router: Router,
                private route: ActivatedRoute,
                private globals: Globals,
                private store: Store<any>) {
    }

    ngOnInit() {
        this.store.dispatch(new NavbarActions.GetNavbarState({isHidden: false}))
        this.store.select('navbar').subscribe({
            next: navBarResult => this.showNavBar = navBarResult.isHidden,
            error: err => console.warn('Cannot complete NavBar action, ', err),
            complete: () => console.log('completed')
        });


    }
}

