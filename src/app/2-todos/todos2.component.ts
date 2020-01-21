import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from './todo2.service'

@Component({
  providers: [TodoserviceService],
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message;

  constructor(private service: TodoserviceService) { }

  ngOnInit() {
    this.service.getTodos().subscribe(t => {
      console.log(t)
      this.todos = t
    });
  }

  add() {
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }
}
