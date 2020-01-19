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
    this.service.getTodos()
  }

  add() {

  }

  delete(id) {

  }

}
