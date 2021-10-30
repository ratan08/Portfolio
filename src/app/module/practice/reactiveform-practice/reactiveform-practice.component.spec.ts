import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformPracticeComponent } from './reactiveform-practice.component';

describe('ReactiveformPracticeComponent', () => {
  let component: ReactiveformPracticeComponent;
  let fixture: ComponentFixture<ReactiveformPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
