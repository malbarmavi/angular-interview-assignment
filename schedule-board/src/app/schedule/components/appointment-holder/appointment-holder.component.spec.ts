import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentHolderComponent } from './appointment-holder.component';

describe('AppointmentHolderComponent', () => {
  let component: AppointmentHolderComponent;
  let fixture: ComponentFixture<AppointmentHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
