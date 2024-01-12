import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactComponent } from './form-react.component';

describe('FormReactComponent', () => {
  let component: FormReactComponent;
  let fixture: ComponentFixture<FormReactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReactComponent]
    });
    fixture = TestBed.createComponent(FormReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
