/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos2.component';
import { TodoserviceService } from './todo2.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('Todos2Component', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent],
      providers: [TodoserviceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should load todos from server', () => {
    let service = TestBed.get(TodoserviceService);
    expect(service).not.toBeNull();

    spyOn(service,'getTodos').and.callFake(()=>{
      console.log("call fake")
      return Observable.create((obs)=>{
        obs.next([1,2,3])
      })
    })
    fixture.detectChanges();
    expect(component.todos.length).toBe(3);

    // let service = TestBed.get(TodoserviceService);
    // console.log("got service")
    // // let service = fixture.debugElement.injector.get(TodoserviceService);

    // spyOn(service, 'getTodos').and.callFake(() => {
    //   console.log("call fake")
    //   return Observable.create((obs) => {
    //     obs.next([1,2,3]);
    //   })
    // })

    // expect(component.todos.length).toBe(3);
  });
});
