import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
  }

  get headers() {
    return { headers: new HttpHeaders() }
  }

  attemptRegister(data: object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/register`, data, this.headers)
  }
}
