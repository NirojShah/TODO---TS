import { Component, inject, signal } from '@angular/core';
import { TodoService, TodoType } from '../../service/todo';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoStore } from '../../store/todo-store';

@Component({
  selector: 'app-todo-component',
  imports: [],
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.css',
})
export class TodoComponent {
  todoService = inject(TodoService);
  todoStore = inject(TodoStore);
  todos = this.todoStore.todos;

  ngOnInit() {
    this.todoService.getTodo().subscribe((data: TodoType[]) => {
      this.todos.set(data);
      console.log(this.todos());
    });
  }

  handleDelete(id: number): void {
    this.todoService.delete(id);
  }

  handleUpdate(id: number): void {
    this.todoService.updateTodo(id);
  }
}
