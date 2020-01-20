import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any[] = [];
  message;




  constructor(private service: TodoserviceService) { }

  ngOnInit() {
    this.service.getTodos().subscribe(t => this.todos = t)
  }

  add() {
    let newTodo = { todo: "a" };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      e => this.message = e
    );
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }

}
