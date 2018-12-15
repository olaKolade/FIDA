import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAComponent } from './event.component';

describe('EventAComponent', () => {
  let component: EventAComponent;
  let fixture: ComponentFixture<EventAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
