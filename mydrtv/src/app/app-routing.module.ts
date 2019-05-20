import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {FilmComponent} from './film/film.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'film',
        canActivate: [AuthGuardService],
        children: [
            {path: ':id', component: FilmComponent},
            {path: 'player/:id', component: PlayerComponent}
        ]
    },
    {
        path: 'player/:id',
        component: PlayerComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: 'app'
    },
    {
        path: 'search',
        component: SearchComponent
    },
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
