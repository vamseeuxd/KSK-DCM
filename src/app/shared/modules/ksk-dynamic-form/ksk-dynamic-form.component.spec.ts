import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KskDynamicFormComponent } from './ksk-dynamic-form.component';

describe('KskDynamicFormComponent', () => {
  let component: KskDynamicFormComponent;
  let fixture: ComponentFixture<KskDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KskDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KskDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
