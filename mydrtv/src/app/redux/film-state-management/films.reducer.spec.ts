import {filmReducer} from './films.reducer';
import {FilmModel} from '../../models/film.model';
import * as types from './films.actions';
const deepFreeze = require('deep-freeze');

describe('films reducer', () => {
    // tslint:disable-next-line:no-unused-expression
    it('should return the initial state', () => {
        expect(filmReducer(undefined, {})).toEqual(
            new FilmModel(null, null, null, null, null, null, null,
                null, null, null, null, null, null, null,
                null, null, null, null, null)
        );
    });
    it('should fo the fucking movie in the store', () => {
        const stateBefore = new FilmModel(null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            null, null, null, null, null);
        deepFreeze(stateBefore);

        //expect(filmReducer)

        const stateAfter = new FilmModel('5cc47400ec8586651cc0366b', 'The Inheritance', 2003, 'Not Rated',
            '2004-07-08T22:00:00.000Z', 115, 'Drama', 'Per Fly', 'Per Fly, Kim Leona, Mogens Rukov, Dorthe Warnø Høgh',
            'Ulrich Thomsen, Lisa Werlinder, Ghita Nørby, Karina Skands', 'A young man is torn between his individual hopes and his sense of duty when his father dies and he is expected to take over the family industry.',
            'Danish, Swedish, French, Norwegian', 'Denmark, Sweden, Norway, UK', '17 win',
            'https://m.media-amazon.com/images/M/MV5BMTk5Nzc5NjcwMl5BMl5BanBnXkFtZTcwMzExMTkyMQ@@._V1_SX300.jpg',
            'movie', 22, [], 'http://ia800301.us.archive.org/2/items/Sita_Sings_the_Blues/Sita_Sings_the_Blues_1080p.mp4');

        let response = filmReducer(stateBefore, {type: types.GET_MOVIE_BY_ID, payload: stateAfter});
        expect(stateBefore).toEqual(stateAfter);
    });
});
