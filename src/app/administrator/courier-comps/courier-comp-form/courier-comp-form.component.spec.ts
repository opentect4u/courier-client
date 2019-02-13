import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierCompFormComponent } from './courier-comp-form.component';

describe('CourierCompFormComponent', () => {
  let component: CourierCompFormComponent;
  let fixture: ComponentFixture<CourierCompFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierCompFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierCompFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
