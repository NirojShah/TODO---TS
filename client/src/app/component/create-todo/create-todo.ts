import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../service/todo';
import { TodoComponent } from '../todo-component/todo-component';
import { TodoStore } from '../../store/todo-store';

@Component({
  selector: 'app-create-todo',
  imports: [],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.css',
})
export class CreateTodo {
  inputVal = signal<string>('');
  todoService = inject(TodoService);
  todoStore = inject(TodoStore);

  handleCreate(taskName: string): void {
    this.todoService.createTodo(taskName);
  }
}
