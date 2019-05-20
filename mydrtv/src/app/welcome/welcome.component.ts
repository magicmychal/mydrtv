import {Component, OnInit} from '@angular/core';
import {VgAPI, VgControlsHidden} from 'videogular2/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    animations: [
        trigger('fade', [
            //state(),
            // void goes to default, do something
            transition('void <=> *', [
               style({transform: 'translateY(20%)', opacity: 0}),
               animate(1000)
            ])
        ])
    ]
})
export class WelcomeComponent implements OnInit {
    preload: string = 'auto';
    api: VgAPI;


    constructor(private controlsHidden: VgControlsHidden) {
    }

    ngOnInit() {
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;
        this.api.play();
    }


}
