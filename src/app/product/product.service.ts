import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  searchByTerm(searchTerm: string): Observable<any> {
    const url = `${environment.apiUrl}product/search/by-name-or-desc?term=${searchTerm}`;
    return this.httpClient.get(url);
  }
}
