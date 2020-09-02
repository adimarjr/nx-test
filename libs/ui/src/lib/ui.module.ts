import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
