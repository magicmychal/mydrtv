import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './entities/films';

@Pipe({
  name: 'filmsSearch'
})
export class FilmsSearchPipe implements PipeTransform {
  films: any;
  notFound: string;
  constructor(
    //public rest: FilmRestService,
  ){}

  transform(films: Film[], search: string = ""): any {
    console.log(films);
    console.log(search);
    return films.filter(film => film.Title.indexOf(search) !== -1);
  }

}
