import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.develop';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  //https://newsapi.org/v2/top-headlines?country=us&apiKey=b378b8d4edb0425a91bc029fc570258a
  public get(url: string, params: HttpParams = new HttpParams()) {
    return this.http.get(environment.apiUrl + url + '&apiKey=' + environment.apiKey )
  }
}


// EXAMPLE

// public get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
//   const headers: HttpHeaders =  new HttpHeaders();
//   const csrftoken = this.cookieService.get('csrftoken');
//   if (csrftoken) {
//     headers.append('X-CSRFToken', csrftoken);
//   }
//   const options = { params, headers, withCredentials: true };

//   return this.http.get(environment.apiUrl + url, options);
// }


// public post(url: string, data: any): Observable<any> {
//   const headers: HttpHeaders =  new HttpHeaders();
//   headers.append('Content-Type', 'application/json');
//   headers.append('Access-Control-Allow-Origin', '*');
//   // 'X-CSRFToken': this.cookieService.get(''X-CSRFToken': this.cookieService.get('csrftoken')')
//   const csrftoken = this.cookieService.get('csrftoken');
//   if (csrftoken) {
//     headers.append('X-CSRFToken', csrftoken);
//   }
//   return this.http.post(environment.apiUrl + url, data, {headers, withCredentials: true});
// }
