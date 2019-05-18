import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

const endpoint = 'http://localhost:3000/films/';

@Injectable({
  providedIn: 'root'
})

export class GetMoviesService {

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getMovies(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

}
