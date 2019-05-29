import {filmReducer} from './films.reducer';
import {FilmModel} from '../../models/film.model';
import * as types from './films.actions';
const deepFreeze = require('deep-freeze');

describe('films reducer', () => {
    // tslint:disable-next-line:no-unused-expression

    const stateBefore = new FilmModel(null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null);

    it('should return a new state with a single movie', () => {

        deepFreeze(stateBefore);

        const stateAfter = {
                Comments: [],
                _id: '5cd9655d19fcad52cc9bb9ad',
                Title: 'The Inheritance',
                Year: 2003,
                Rated: 'Not Rated',
                Released: '2004-07-08T22:00:00.000Z',
                Runtime: 115,
                Genre: 'Drama',
                Director: 'Per Fly',
                Writer: 'Per Fly, Kim Leona, Mogens Rukov, Dorthe Warnø Høgh',
                Actors: 'Ulrich Thomsen, Lisa Werlinder, Ghita Nørby, Karina Skands',
            // tslint:disable-next-line:max-line-length
                Plot: 'A young man is torn between his individual hopes and his sense of duty when his father dies and he is expected to take over the family industry.',
                Language: 'Danish, Swedish, French, Norwegian',
                Country: 'Denmark, Sweden, Norway, UK',
                Awards: '17 wins',
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTk5Nzc5NjcwMl5BMl5BanBnXkFtZTcwMzExMTkyMQ@@._V1_SX300.jpg',
                Type: 'movie',
                Likes: 22,
                VideoSource: 'http://ia800301.us.archive.org/2/items/Sita_Sings_the_Blues/Sita_Sings_the_Blues_1080p.mp4',
                __v: 0
            };

        const response = filmReducer(stateBefore, {type: types.GET_MOVIE_BY_ID, payload: stateAfter});
        expect(response).toEqual(stateAfter);
    });
});
