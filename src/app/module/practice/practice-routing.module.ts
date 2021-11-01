import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPracticeComponent } from './component-practice/component-practice.component';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { ReactiveformPracticeComponent } from './reactiveform-practice/reactiveform-practice.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { AuthGuardGuard } from '../auth/auth-guard.guard';

const practiceRoute: Routes = [
  {
    path: 'practice', canActivate: [AuthGuardGuard], children: [
      { path: '', component: ComponentPracticeComponent },
      { path: 'component-practice', component: ComponentPracticeComponent },
      { path: 'directives-practice', component: DirectivesPracticeComponent },
      { path: 'reacttiveform-practice', component: ReactiveformPracticeComponent },
      { path: 'template-practice', component: TemplatePracticeComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(practiceRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class PracticeRoutingModule { }
