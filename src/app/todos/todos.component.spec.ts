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
    const arr = ['todo1', 'todo2'];

    spyOn(service, 'getTodos').and.callFake(() => {
      return new Observable(
        (obs) => {
          setTimeout(() => {
            obs.next(arr);
          }, 500);
        })
    })

    component.ngOnInit();
    expect(component.todos.length).toBe(arr.length);

  })




});
