import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

import { UiModule } from '@test-nx/ui';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule,
    HttpClientModule,
    UiModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
