import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from './global-runtime-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint = 'http://2ezfish.com/api/';
  // endpoint = 'http://192.168.1.101:8080/api/';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }



  /*********************************** test ************************************ */

  getProducts(): Observable<any> {
    return this.http.get(this.endpoint + 'products').pipe(
      map(this.extractData));
  }
  
  getProduct(id): Observable<any> {
    return this.http.get(this.endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }
  
  addNewPerson (user:User): number {
    console.log(user);
    let body =  JSON.stringify(user);
    this.http.post(this.endpoint + 'registration', body, this.httpOptions).subscribe(r=>{
    
      // if ( r == 1)
      //   alert("Registrazione riuscita.");  
      
      // else if ( r == -2)
      //   alert("Email esistente.\nEmail already exists.");
      
      // else
      //   alert("Errore registrazione non riuscita.")
      
      return r;
    });

    return -1001;
  }
  
  updateProduct (id, product): Observable<any> {
    let body =  JSON.stringify(product);
    return this.http.put(this.endpoint + 'products/' + id, body, this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'products/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }





   /********************************** test end ********************************** */




  /*********************************** users ************************************ */

  registerNewPerson(): number{
    return 1;
  }






   /********************************** users end ********************************** */
}
