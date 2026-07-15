import { Component, inject } from '@angular/core';
import { TodoStore } from '../../store/todo-store';

@Component({
  selector: 'app-todo-message',
  imports: [],
  templateUrl: './todo-message.html',
  styleUrl: './todo-message.css',
})
export class TodoMessage {
  todoStore = inject(TodoStore);
}
