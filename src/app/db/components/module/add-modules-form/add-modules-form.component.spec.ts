import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModulesFormComponent } from './add-modules-form.component';

describe('AddModulesFormComponent', () => {
  let component: AddModulesFormComponent;
  let fixture: ComponentFixture<AddModulesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModulesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModulesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
