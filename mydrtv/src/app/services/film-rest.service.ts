import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FilmModel } from "../models/film.model";
import {Film} from '../entities/films';
import { map, catchError, tap } from 'rxjs/operators';
import {errorObject} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class FilmRestService {
 // public baseUrl: string = 'http://localhost:3000/films';
  private films: any;
  private baseurl: string = 'http://localhost:3000/films';
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin' : '*'
  });

  constructor(private http: HttpClient) {}
  getAll() : Observable<FilmModel[]> {
   //  console.log('before');
   //  this.http.get(this.baseurl).subscribe(
   //    x => this.films = x,
   //    err => console.error('Observer got an error: ' + err),
   //    () => console.log('Observer got a complete notification')
   //  );
   // console.log('after', JSON.stringify(this.films));
    return this.http.get(this.baseurl) as Observable<FilmModel[]>;
  }

  getAllTesT () {

  }

  // getAll(){
  //   this.http.get(this.baseurl).subscribe((res: any[]) =>{
  //     console.log(res);
  //     this.films = res;
  //   })
  //
  // }

}
