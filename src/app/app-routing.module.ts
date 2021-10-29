import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/Main/footer/footer.component';
import { RegistrationFormComponent } from './components/Task/form/registration-form/registration-form.component';
import { HomeComponent } from './components/Main/home/home.component';
import { TictactoeComponent } from './components/Task/tictactoe/tictactoe.component';
import { ToDoComponent } from './components/Task/to-do/to-do.component';
import { ComponentPracticeComponent } from './components/practice/component-practice/component-practice.component';
import { DirectivesPracticeComponent } from './components/practice/directives-practice/directives-practice.component';
import { ReactiveformPracticeComponent } from './components/practice/reactiveform-practice/reactiveform-practice.component';
import { TemplatePracticeComponent } from './components/practice/template-practice/template-practice.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: "registration", component: RegistrationFormComponent },
  { path: 'tictactoe', component: TictactoeComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'component-practice', component: ComponentPracticeComponent },
  { path: 'directives-practice', component: DirectivesPracticeComponent },
  { path: 'reacttiveform-practice', component: ReactiveformPracticeComponent },
  { path: 'template-practice', component: TemplatePracticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
