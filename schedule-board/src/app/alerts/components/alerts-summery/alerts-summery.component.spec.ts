import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsSummeryComponent } from './alerts-summery.component';

describe('AlertsSummeryComponent', () => {
  let component: AlertsSummeryComponent;
  let fixture: ComponentFixture<AlertsSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
