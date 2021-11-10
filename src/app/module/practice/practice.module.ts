import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatrialModule } from 'src/app/matrial/matrial.module';
import { PracticeRoutingModule } from './practice-routing.module';
import { ComponentPracticeComponent } from './component-practice/component-practice.component';
import { ReactiveformPracticeComponent } from './reactiveform-practice/reactiveform-practice.component';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { ChildcomponentComponent } from './component-practice/childcomponent/childcomponent.component';
import { ColorChangeDirective } from 'src/app/directive/color-change.directive';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Com1Component } from './subject/com1/com1.component';
import { Com2Component } from './subject/com2/com2.component';
import { Com3Component } from './subject/com3/com3.component';


@NgModule({
  declarations: [
    ComponentPracticeComponent,
    ColorChangeDirective,
    ChildcomponentComponent,
    ReactiveformPracticeComponent,
    DirectivesPracticeComponent,
    TemplatePracticeComponent,
    HttpComponent,
    RxjsComponent,
    Com1Component,
    Com2Component,
    Com3Component
  ],
  imports: [
    CommonModule,
    MatrialModule,
    FormsModule,
    ReactiveFormsModule,
    PracticeRoutingModule,
    HttpClientModule
  ]
})
export class PracticeModule {
  constructor() {
    console.log("practice module loaded");
  }
}
