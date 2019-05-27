import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {FilmComponent} from './film/film.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/welcome',
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
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuardService]
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: '**',
        redirectTo: 'app'
    },
    {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'members',
        component: MembersComponent
    },
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
