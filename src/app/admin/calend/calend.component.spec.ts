import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendAComponent } from './calend.component';

describe('CalendAComponent', () => {
  let component: CalendAComponent;
  let fixture: ComponentFixture<CalendAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
