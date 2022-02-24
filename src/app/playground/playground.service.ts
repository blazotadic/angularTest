import { Injectable } from "@angular/core";
import { concat, from, Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PlaygroundService {

  of(): Observable<any> {
    const data1 = {id: 1, name: 'Mark'};
    const data2 = {id: 2, name: 'John'};
    const obs$ = of(data1, data2);

    return obs$;
  }

  from(): Observable<any> {
    const data1 = {id: 3, name: 'Test1'};
    const data2 = {id: 4, name: 'Test2'};

    const obs$ = from([data1, data2]);
    return obs$;
  }

  map(): Observable<any> {
    const obs$ = this.of();
    return obs$;
  }

  concat(): Observable<any> {
    const obs1$ = this.of();
    const obs2$ = this.from();

    const combined$ = concat(obs1$, obs2$);
    return combined$;
  }

  getObservables(): Observable<any> {
    const obs$ = this.of();
    return obs$;
  }

  getObservable(): Observable<any> {
    const data = [
      {id: 1, name: 'Test1'},
      {id: 2, name: 'Test2'},
      {id: 3, name: 'Test3'}
    ];
    return of(data);
  }

}
