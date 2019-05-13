import {Action} from '@ngrx/store';
import {FilmModel} from "../../models/film.model";

export const GET_ALL_FILMS = 'GET_ALL_FILMS';

export class GetAllFilms implements Action{
  readonly type = GET_ALL_FILMS;
  // payload is additional data that is passed
  payload: FilmModel;
}
export type FilmsActions = GetAllFilms;
