import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDComponent } from './index.component';

describe('IndexDComponent', () => {
  let component: IndexDComponent;
  let fixture: ComponentFixture<IndexDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
