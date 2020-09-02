import { Injectable } from '@nestjs/common';
import { Todo } from '@test-nx/api-interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Todo as TodoSchema } from './todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(TodoSchema.name) private todoModel: Model<TodoSchema>) {}

  async add(todo: Todo): Promise<Todo> {
    const todoModel = new this.todoModel(todo);
    return todoModel.save();
  }

  async list(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }
}
