import { FilmsSearchPipe } from './films-search.pipe';
import {TemporaryDataService} from "./temporary-data.service";
import { Film } from './entities/films';

describe('FilmsSearchPipe', () => {
  // 1.0: Empty search, should show all films.
  // 1.1: Search for 'Pusher' (film title), should return one object.
  // 1.2: Search for 'pusher' (film title), should return one object.
  // 1.3: Search for 'r' (film title), should return 2 objects.
  // 1.4: Search for 'abc' (film title), should return empty array

  it('create an instance', () => {
    const pipe = new FilmsSearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return all films when search is empty', () => {

    // Arrange
    const filmsArray  = TemporaryDataService.films;
    const pipe = new FilmsSearchPipe();

    // Act
    let result: Film[] = pipe.transform(filmsArray, '');

    // Assert (expect)
    expect(result).toEqual(filmsArray);

  })
});
