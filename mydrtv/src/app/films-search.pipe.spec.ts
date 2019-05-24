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
    const filmsArray  = TemporaryDataService.films;
    const pipe = new FilmsSearchPipe();
    let result: Film[] = pipe.transform(filmsArray, '');
    expect(result).toEqual(filmsArray);
  })
  it('should return one object when search for Pusher ', () => {
    const filmsArray  = TemporaryDataService.films;
    const pipe = new FilmsSearchPipe();
    let result: Film[] = pipe.transform(filmsArray, 'Pusher');
    expect(result.length).toBe(1);
    console.log(result)
  })
  it('should return one object when search for pusher ', () => {
    const filmsArray  = TemporaryDataService.films;
    const pipe = new FilmsSearchPipe();
    let result: Film[] = pipe.transform(filmsArray, 'pusher');
    expect(result.length).toBe(1);
    console.log(result)
  })
  it('should return one object when search for r ', () => {
    const filmsArray  = TemporaryDataService.films;
    const pipe = new FilmsSearchPipe();
    let result: Film[] = pipe.transform(filmsArray, 'r');
    expect(result.length).toBe(2);
    console.log(result)
  })
  it('should return one object when search for r ', () => {
    const filmsArray  = TemporaryDataService.films;
    const pipe = new FilmsSearchPipe();
    let result: Film[] = pipe.transform(filmsArray, 'abc');
    expect(result.length).toBe(0);
    console.log(result)
  })
});
