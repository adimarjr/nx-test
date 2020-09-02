import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop()
  name: string;

  @Prop({default: Date.now})
  created: Date;

  @Prop({enum: ['pending', 'ongoing', 'completed'], default: 'pending'})
  status: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);