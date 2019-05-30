import {Action} from '@ngrx/store';
import {FilmModel} from '../../models/film.model';

//export const GET_ALL_FILMS = 'GET_ALL_FILMS';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
/*
export class GetAllFilms implements Action {
  readonly type = GET_ALL_FILMS;
  // payload is additional data that is passed
  payload: FilmModel;
}*/

export class GetMovieById implements Action {
  readonly type = GET_MOVIE_BY_ID;

  constructor(public payload: FilmModel) {

  }

  // @ts-ignore
  //constructor(public payload);

}
export type FilmsActions = GetMovieById;
