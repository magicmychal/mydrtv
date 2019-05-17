import * as FilmsActions from './films.actions';
import {Action} from '@ngrx/store';
import {FilmModel} from "../../models/film.model";

// Below are exports of actions used in the filmsReducer
export const GET_ALL_FILMS = 'GET_ALL_FILMS';
export const GET_FILM = 'GET_FILM';

const initialState = {
  films: []
};

// Initial state is assign to the state in the function below
// If it's not available while triggering the function
// It'll take the default
export function filmsReducer(state = initialState, action: FilmsActions.FilmsActions) {
  // here we create a new state and return it
  /*
  But first, what is the action?
  We use switch cases to define that
   */
  switch (action.type) {
    case FilmsActions.GET_ALL_FILMS :
      return {
        ...state, // get the current state and add to the new copy,
        films: [action.payload]
      };
    default:
      return state;
  }
}
