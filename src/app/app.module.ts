import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { VoteEventemitterComponent } from './vote-eventemitter/vote-eventemitter.component';
import { TodosComponent } from './todos/todos.component';
import { TodoserviceService } from './2-todos/todo.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent,
    VoteEventemitterComponent,
    TodosComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
