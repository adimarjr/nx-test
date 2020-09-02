import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@test-nx/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly resource: string = '/api/todo';
  constructor(private readonly http: HttpClient) { }

  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.resource);
  }

  add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.resource, todo);
  }

  updateStatus(item: Todo) {
    item.status = 'completed';
    return this.http.put(`${this.resource}/${item._id}`, item);
  }

}
