import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoserviceService } from '../todoservice.service';
import { Observable, throwError } from 'rxjs';

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

  it('should set message if returned error', () => {
    //given
    let errorMessage = 'error message'

    let spy = spyOn(service, 'add').and.callFake(todo => {

      // return Observable.throw(errorMessage);
      return throwError(errorMessage);
    })
    //when
    component.add();

    //then
    let actual = component.message;
    expect(actual).toBe(errorMessage);
  })

  it('should call the server to delete a todo item if confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let serviceSpy = spyOn(service, 'delete').and.returnValue(Observable.create((obs) => {
      obs.next();
    }))

    component.delete(1);

    expect(serviceSpy).toHaveBeenCalledWith(1);
  })

  it('server should not be callsed todo item if cancleled', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let serviceSpy = spyOn(service, 'delete').and.returnValue(Observable.create((obs) => {
      obs.next();
    }))

    component.delete(1);

    expect(serviceSpy).not.toHaveBeenCalled();
  })
});
