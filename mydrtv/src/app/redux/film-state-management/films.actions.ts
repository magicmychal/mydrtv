import {Action} from '@ngrx/store';
import {FilmModel} from '../../models/film.model';

export const GET_ALL_FILMS = 'GET_ALL_FILMS';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';

export class GetAllFilms implements Action {
  readonly type = GET_ALL_FILMS;
  // payload is additional data that is passed
  payload: FilmModel;
}

export class GetMovieById implements Action {
  readonly type = GET_MOVIE_BY_ID;

  constructor(public payload: {_id: string, Title: string, Year: string, Rated: string,
  Released: string, Runtime: number, Genre: string, Director: string, Writer: string,
  Actors: string, Plot: string, Language: string, Country: string, Awards: string,
  Poster: string, Type: string, Likes: number, Comments: [], VideoSource: string}) {

  }

  // @ts-ignore
  //constructor(public payload);

}
export type FilmsActions = GetAllFilms | GetMovieById;
