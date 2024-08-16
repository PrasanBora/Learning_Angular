import { Component } from '@angular/core';
import { Todo } from '../../Todo'
import { TodoItemsComponent } from "../todo-items/todo-items.component";

import { CommonModule } from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemsComponent, CommonModule, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent 
{

  todos :Todo[] ;

  constructor () {
    this.todos = [
       {  
          sno :1,
          Tittle : "Tittle 1",
          desc : "this is our desc",
          isactive : true
       },
       {  
        sno :2,
        Tittle : "Tittle 2",
        desc : "this is our desc",
        isactive : true
       },
       {  
        sno :3,
        Tittle : "Tittle 3",
        desc : "lorrem ",
        isactive : true
     }
    ]
  }

  deleteTodo(todo :Todo)
  {
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

}
