import { Injectable, signal } from '@angular/core';
import { TodoType } from '../service/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  todos = signal<TodoType[]>([]);
  errorMessage = signal<string>('');
  isError = signal<boolean | null>(null);
  duration = 5000;
}
