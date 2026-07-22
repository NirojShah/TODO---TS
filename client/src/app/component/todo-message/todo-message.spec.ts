import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMessage } from './todo-message';

describe('TodoMessage', () => {
  let component: TodoMessage;
  let fixture: ComponentFixture<TodoMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
