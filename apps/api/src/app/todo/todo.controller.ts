import { Controller, Get, Post, Body } from '@nestjs/common';

import { Todo } from '@test-nx/api-interfaces';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    return await this.service.add(todo);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.service.list();
  }
}
