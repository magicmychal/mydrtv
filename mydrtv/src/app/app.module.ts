import {BrowserModule} from '@angular/platform-browser';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';


// Video player import starts
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
// Video player import ends

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayerComponent} from './player/player.component';
import {FilmComponent} from './film/film.component';
import {HttpClientModule} from '@angular/common/http';
import {filmsReducer} from './redux/film-state-management/films.reducer';

import {HomeComponent} from './home/home.component';
import {MovieCarouselComponent} from './movie-carousel/movie-carousel.component';
import {SignupComponent} from './signup/signup.component';

import {NavbarComponent} from './navbar/navbar.component';
import {ProfileComponent} from './profile/profile.component';
import {MembersComponent} from './members/members.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {MoviesCardComponent} from './movies-card/movies-card.component';
import {SearchComponent} from './search/search.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FilmsSearchPipe} from './films-search.pipe'; //font awesome icons
import {WelcomeComponent} from './welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';

// user reducer
import {StoreModule} from '@ngrx/store';
import {userReducer} from './redux/user-state-management/user.reducer';

// dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
        WelcomeComponent,
        SearchComponent,
        FilmsSearchPipe,
        MembersComponent,
        PrivacyPolicyComponent
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
        ReactiveFormsModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        // reducers
        StoreModule.forRoot({films: filmsReducer, operations: userReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
