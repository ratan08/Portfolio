import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuardGuard } from '../auth/auth-guard.guard';

const taskRoute: Routes = [
  {
    path: "task", canActivate: [AuthGuardGuard], children: [
      { path: "", component: RegistrationFormComponent },
      { path: "registration", component: RegistrationFormComponent },
      { path: "tictactoe", component: TictactoeComponent },
      { path: "todo", component: TodoComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoute)
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
