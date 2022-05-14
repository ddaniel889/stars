import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class StarsDataService {

  constructor(private http: HttpClient) {

   }

    /* Get list of students */
  public getStudent(url:string):Observable<any>{
    return this.http.get<any[]>(url).pipe(
      map( (resp: any) => {
      return resp;
      } ),
      catchError(this.handleError<any>())
      );

   }

   public get(route:string): Observable<any> {

    return this.http.get( URL.BASE+route).pipe(
        map(
          (resp: any) => {
            return resp;
            }
          ),
        catchError(this.handleError<any>())
    );
  }

   private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
  };
}
}
