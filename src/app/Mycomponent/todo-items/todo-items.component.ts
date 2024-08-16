
import { Component ,Input, Output ,EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})

export class TodoItemsComponent {
  @Input()
  todo!: Todo;

  @Output()  todoDelete :EventEmitter<Todo> = new EventEmitter<Todo>;

  onClick( todo :Todo) {
   this.todoDelete.emit(todo);
    console.log("OnClick Triggerd")
  }
}
