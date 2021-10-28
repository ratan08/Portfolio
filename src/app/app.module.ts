import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatrialModule } from './matrial/matrial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { DetailDailogComponent } from './Dailog/detail-dailog/detail-dailog.component';
import { RegistrationFormComponent } from './components/form/registration-form/registration-form.component';




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
