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
import { FilmComponent } from './film/film.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {filmsReducer} from './films-redux/state-management/films.reducer';

import { HomeComponent } from './home/home.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { SignupComponent } from './signup/signup.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MoviesCardComponent } from './movies-card/movies-card.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    FilmComponent,
    HomeComponent,
    MovieCarouselComponent,
    SignupComponent,
    NavbarComponent,
    ProfileComponent,
    LoginComponent,
    MoviesCardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
    StoreModule.forRoot({films: filmsReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
