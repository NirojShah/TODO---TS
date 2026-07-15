import { Component, inject } from '@angular/core';
import { TodoComponent } from '../component/todo-component/todo-component';
import { CreateTodo } from '../component/create-todo/create-todo';
import { TodoMessage } from '../component/todo-message/todo-message';
import { TodoStore } from '../store/todo-store';

@Component({
  selector: 'app-todo',
  imports: [TodoComponent, CreateTodo, TodoMessage],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  todoStore = inject(TodoStore);
}
