import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Todo } from '@test-nx/api-interfaces';

@Component({
  selector: 'test-nx-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(null);
  todos$: Observable<Todo[]> = this.todos.asObservable();
  todoName: string;

  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.get().subscribe(res => {
      this.todos.next(res);
    });
  }

  add() {
    this.todoService.add({
      name: this.todoName
    }).subscribe((res: Todo) => {
      this.todos.next([...this.todos.value, res]);
      this.todoName = '';
    });
  }

  remove(item: Todo) {
    this.todoService.updateStatus(item).subscribe(_ => {
      this.todos.next(this.todos.value.filter(todo => todo.name !== item.name));
    });
  }
}
