import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendComponent } from './calend.component';

describe('CalendComponent', () => {
  let component: CalendComponent;
  let fixture: ComponentFixture<CalendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
