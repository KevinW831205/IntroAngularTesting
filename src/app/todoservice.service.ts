import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http: HttpClient) {
  }

  // add(todo) {
  //   return this.http.add('...', todo).map(r => r.json());
  // }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>("g")
  }

  // delete(id) {
  //   return this.http.delete('...').map(r => r.json());
  // }


}
