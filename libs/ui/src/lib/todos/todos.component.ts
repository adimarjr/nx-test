import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@test-nx/api-interfaces';

@Component({
  selector: 'test-nx-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  removed: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(item: Todo) {
    this.removed.emit(item);
  }

}
