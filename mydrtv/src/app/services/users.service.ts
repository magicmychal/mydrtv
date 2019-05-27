import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../entities/users';


const endpoint = 'http://localhost:3000/users/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(endpoint, JSON.stringify(user), httpOptions).pipe(
      tap((newUser: User) => console.log(`added user`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  getUsers(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  getUser(id: string): Observable<any> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData));
  }

  updateUser(id: string, user: User): Observable<any> {
    return this.http.put(endpoint + id, JSON.stringify(user), httpOptions).pipe(
      tap(_ => console.log(`updated user id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(endpoint+ id, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
