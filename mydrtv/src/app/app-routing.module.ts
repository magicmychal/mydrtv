import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {FilmComponent} from './film/film.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},

  {
    path: 'film/:id',
    component: FilmComponent,
    // TODO: fix the routing to the player
  },
  {
    path: 'player/:id',
    component: PlayerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
