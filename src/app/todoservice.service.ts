import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post("g", todo)
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>("g")
  }

  delete(id) {
    return this.http.delete('g/' + id);
  }


}
