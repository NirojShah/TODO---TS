import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoStore } from '../store/todo-store';

export interface TodoType {
  _id: string;
  taskName: string;
  taskId: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TodoResp {
  message: string;
  data: any;
}

// Strictly typing the specific response layout for your GET request
export interface GetTodoResp {
  message: string;
  data: TodoType[];
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url: string = 'http://localhost:5000/app/v1/todo';

  constructor(
    private http: HttpClient,
    private todoStore: TodoStore,
  ) {}

  showMessage(message: string): void {
    this.todoStore.errorMessage.set(message);
    setTimeout(() => {
      this.todoStore.errorMessage.set('');
    }, this.todoStore.duration);
  }

  // Option A: If you want components to receive the whole wrapper object
  getTodoRaw(): Observable<GetTodoResp> {
    return this.http.get<GetTodoResp>(this.url);
  }

  // Option B: If you want components to just get the clean TodoType[] array directly
  getTodo(): Observable<TodoType[]> {
    return this.http.get<GetTodoResp>(this.url).pipe(map((response) => response.data));
  }

  createTodo(taskName: string): void {
    const resp = this.http.post<TodoResp>(this.url, {
      todoName: taskName,
    });
    resp.subscribe({
      next: (response) => {
        this.todoStore.todos.update((val) => [response.data, ...val]);
        this.showMessage(response.message);
      },
      error: (error) => {
        this.showMessage((error as Error).message);
      },
    });
  }

  updateTodo(taskId: number): void {
    const resp = this.http.patch<TodoResp>(`${this.url}?taskId=${taskId}`, {});
    resp.subscribe({
      next: (response) => {
        const updatedTodo = response.data;
        this.todoStore.todos.update((todos) =>
          todos.map((todo) => (todo.taskId === taskId ? updatedTodo : todo)),
        );
        this.showMessage(response.message);
      },
      error: (error) => {
        this.showMessage((error as Error).message);
      },
    });
  }

  delete(taskId: number): void {
    const resp = this.http.delete<any>(`${this.url}?taskId=${taskId}`);
    resp.subscribe({
      next: (response) => {
        this.todoStore.todos.update((val) => {
          const newVal = val.filter((val) => val.taskId != taskId);
          return newVal;
        });
        this.showMessage('successfully deleted.');
      },
      error: (error) => {
        this.showMessage((error as Error).message);
      },
    });
  }
}
