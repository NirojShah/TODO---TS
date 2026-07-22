import { Injectable } from '@angular/core';

interface TodoType {
  title: string;
  status: 'completed' | 'pending';
}

@Injectable({
  providedIn: 'root',
})
export class Todo {}
