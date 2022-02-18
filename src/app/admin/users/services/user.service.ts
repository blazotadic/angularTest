import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    const url = `${environment.apiUrl}user/all`;
    return this.httpClient.get(url);
  }

  existsByUsername(username: string): Observable<{status: boolean}> {
    const url = `${environment.apiUrl}user/exists/by-username/${username}`;
    return this.httpClient.get<{status: boolean}>(url);
  }

  deactivateById(id: number): Observable<any> {
    const url = `${environment.apiUrl}user/${id}`; // http://localhost:8080/api/user/1
    return this.httpClient.delete(url);
  }
}
