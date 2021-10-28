import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationFormComponent } from './components/form/registration-form/registration-form.component';
import { HomeComponent } from './components/home/home.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
import { ToDoComponent } from './components/to-do/to-do.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: "registration", component: RegistrationFormComponent },
  { path: 'tictactoe', component: TictactoeComponent },
  { path: 'todo', component: ToDoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
