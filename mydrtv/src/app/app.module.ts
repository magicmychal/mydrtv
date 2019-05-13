import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Video player import starts
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
// Video player import ends

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { DetailsComponent } from './films/details/details.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {filmsReducer} from './films/state-management/films.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
    StoreModule.forRoot({films: filmsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
