import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoserviceService } from '../todoservice.service';
import { Observable } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoserviceService;

  beforeEach(() => {
    service = new TodoserviceService(null);
    component = new TodosComponent(service);
  })

  it('should set todos property with the items returned', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      const array = ['todo1', 'todo2'];

      return new Observable((obs) => {
        obs.next(array);
      })
    })
  })




});
