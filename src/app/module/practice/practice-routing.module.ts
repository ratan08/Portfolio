import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPracticeComponent } from './component-practice/component-practice.component';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { ReactiveformPracticeComponent } from './reactiveform-practice/reactiveform-practice.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { AuthGuardGuard } from '../auth/auth-guard.guard';
import { HttpComponent } from './http/http.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const practiceRoute: Routes = [
  {
    path: '', children: [

      {
        path: 'component-practice',
        canActivate: [AuthGuardGuard],
        component: ComponentPracticeComponent
      },
      {
        path: 'directives-practice',
        canActivate: [AuthGuardGuard],
        component: DirectivesPracticeComponent
      },
      {
        path: 'reacttiveform-practice',
        canActivate: [AuthGuardGuard],
        component: ReactiveformPracticeComponent
      },
      {
        path: 'template-practice',
        canActivate: [AuthGuardGuard],
        component: TemplatePracticeComponent
      }, {
        path: 'http',
        canActivate: [AuthGuardGuard],
        component: HttpComponent
      }, {
        path: 'rxjs',
        canActivate: [AuthGuardGuard],
        component: RxjsComponent
      }
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
