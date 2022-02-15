import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class RoleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    const url = `${environment.apiUrl}role/all`;
    return this.httpClient.get(url);
  }

}
