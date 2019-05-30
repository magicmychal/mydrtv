import * as FilmsActions from './films.actions';
import {FilmModel} from '../../models/film.model';

const initialState = {} as FilmModel;

export function filmReducer(
    state = initialState,
    action: any) {
    switch (action.type) {
        case FilmsActions.GET_MOVIE_BY_ID:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }

}
