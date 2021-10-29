import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TodoComponent } from './todo/todo.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { MatrialModule } from 'src/app/matrial/matrial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrationFormComponent, TodoComponent, TictactoeComponent],
  imports: [
    CommonModule,
    MatrialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskModule { }
