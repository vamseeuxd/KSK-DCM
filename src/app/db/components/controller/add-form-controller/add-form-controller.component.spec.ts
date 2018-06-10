import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormControllerComponent } from './add-form-controller.component';

describe('AddFormControllerComponent', () => {
  let component: AddFormControllerComponent;
  let fixture: ComponentFixture<AddFormControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
