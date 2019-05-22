import { FilmsSearchPipe } from './films-search.pipe';
import {FilmRestService} from "./services/film-rest.service";
import { Film } from './entities/films';

describe('FilmsSearchPipe', () => {
  it('create an instance', () => {
    const pipe = new FilmsSearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return all films when search is empty', () => {
    // Arrange - Act - Assert (expect)

    // Arrange
    const filmsArray  = FilmRestService.films;
    const pipe = new FilmsSearchPipe();

    // Act
    let result: Film[] = pipe.transform(filmsArray, '');

    // Assert (expect)
    expect(result).toEqual(filmsArray);

  })
});
