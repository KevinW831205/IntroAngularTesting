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
      return Observable.create((obs) => {
        obs.next(arr);
      })
    })

    component.ngOnInit();
    expect(component.todos.length).toBe(arr.length);
  })

  it('should call the server when a new todoitem is added', () => {
    let spy = spyOn(service, 'add').and.callFake(todo => {
      return Observable.create((obs) => {
        obs.next();
      })
    })

    component.add();

    expect(spy).toHaveBeenCalled();
  })

  it('should add the item returned to todos', () => {
    //given
    let todo1 = 'todo1'

    let spy = spyOn(service, 'add').and.callFake(todo => {
      return Observable.create((obs) => {
        obs.next(todo1);
      })
    })
    //when
    component.add();

    //then
    let indexOfAddedTodo = component.todos.indexOf(todo1);
    expect(indexOfAddedTodo).toBeGreaterThanOrEqual(0);
  })



});
