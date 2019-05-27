import * as FilmActions from './films.actions';
import {FilmModel} from '../../models/film.model';

const initialState = new FilmModel(null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null);

export function filmReducer(
    state = initialState,
    action: FilmActions.FilmsActions) {
    switch (action.type) {
        case FilmActions.GET_MOVIE_BY_ID:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }

}
