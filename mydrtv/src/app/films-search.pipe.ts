import { Pipe, PipeTransform } from '@angular/core';
import {FilmRestService} from "./services/film-rest.service";
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

  transform(value: any, args?: any): any {
    return null;
  }

}
