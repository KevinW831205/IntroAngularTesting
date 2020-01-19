import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http: HttpClientModule) {
  }

  // add(todo) {
  //   return this.http.add('...', todo).map(r => r.json());
  // }

  getTodos() {
    return this.http.
    public get value() : string {
      return 
    }
    
  }

  // delete(id) {
  //   return this.http.delete('...').map(r => r.json());
  // }


}
