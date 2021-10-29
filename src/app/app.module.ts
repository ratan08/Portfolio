import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/Main/home/home.component';
import { SearchBarComponent } from './components/Main/search-bar/search-bar.component';
import { MatrialModule } from './matrial/matrial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/Main/footer/footer.component';
import { SideBarComponent } from './components/Main/side-bar/side-bar.component';
import { TictactoeComponent } from './components/Task/tictactoe/tictactoe.component';
import { ToDoComponent } from './components/Task/to-do/to-do.component';
import { DetailDailogComponent } from './Dailog/detail-dailog/detail-dailog.component';
import { RegistrationFormComponent } from './components/Task/form/registration-form/registration-form.component';
import { ComponentPracticeComponent } from './components/practice/component-practice/component-practice.component';
import { TemplatePracticeComponent } from './components/practice/template-practice/template-practice.component';
import { DirectivesPracticeComponent } from './components/practice/directives-practice/directives-practice.component';
import { ReactiveformPracticeComponent } from './components/practice/reactiveform-practice/reactiveform-practice.component';
import { ChildcomponentComponent } from './components/practice/component-practice/childcomponent/childcomponent.component';
import { ColorChangeDirective } from './directive/color-change.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TictactoeComponent,
    RegistrationFormComponent,
    SearchBarComponent,
    FooterComponent,
    SideBarComponent,
    ToDoComponent,
    DetailDailogComponent,
    ComponentPracticeComponent,
    TemplatePracticeComponent,
    DirectivesPracticeComponent,
    ReactiveformPracticeComponent,
    ChildcomponentComponent,
    ColorChangeDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatrialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
