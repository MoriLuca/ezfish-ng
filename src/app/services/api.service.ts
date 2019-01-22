import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from './global-runtime-config.service';
import { InputCredenzialiLogin, UserForDotnet } from '../componenets/login/login.component';
import { EMailMessage } from '../componenets/get-info-by-email/get-info-by-email.component';
import { LakePreview } from '../componenets/laghi/laghi.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlGidi = "http://192.168.33.200:8080/";
  urlHome = "http://192.168.1.200:8080/";
  urlToEz = "http://192.168.33.200/";
  
  endpoint = this.urlHome + 'api/';
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
   addNewPerson (user:UserForDotnet) {
    let body =  JSON.stringify(user);
    return this.http.post<number>(this.endpoint + 'registration', body, this.httpOptions);
  }

  login (credenziali:InputCredenzialiLogin) {
    let body =  JSON.stringify(credenziali);
    return this.http.post<User>(this.endpoint + 'login', body, this.httpOptions);
  }



  /*********************************** email ************************************ */

  //Invio un email da parte di un utente dalla pagina contatti   
  SendEmailForInfo(mex: EMailMessage){
    let emailInfoForCore =  JSON.stringify(mex);
    return this.http.post<number>(this.endpoint + 'email', emailInfoForCore, this.httpOptions);
  }



  getLakesPreviews(){
    return this.http.get<LakePreview[]>(this.endpoint + 'getlakesinfo', this.httpOptions);
  }

   /********************************** email end ********************************** */
}


