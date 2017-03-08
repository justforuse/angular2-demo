import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListImmutableComponent } from './todo-list-immutable.component';

describe('TodoListImmutableComponent', () => {
  let component: TodoListImmutableComponent;
  let fixture: ComponentFixture<TodoListImmutableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListImmutableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListImmutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
