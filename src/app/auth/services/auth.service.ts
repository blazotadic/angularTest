import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Login } from "../models/login.model";
import { tap } from "rxjs/operators";
import { JwtToken } from "../models/jwt.model";

@Injectable({ providedIn: 'root' })
export class AuthService {

  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  authenticate(loginData: Login): Observable<any> {
    const url = `${environment.apiUrl}authenticate/login`;
    return this.httpClient.post<JwtToken>(url, loginData)
      .pipe(tap(responseData => {
        const token = responseData.token;
        localStorage.setItem('academy-token', token);
        this.isAuthenticated.next(true);
      }));
  }

  logout(): void {
    localStorage.removeItem('academy-token');
    this.isAuthenticated.next(false);
  }
}
