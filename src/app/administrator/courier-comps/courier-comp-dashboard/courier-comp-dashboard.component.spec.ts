import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierCompDashboardComponent } from './courier-comp-dashboard.component';

describe('CourierCompDashboardComponent', () => {
  let component: CourierCompDashboardComponent;
  let fixture: ComponentFixture<CourierCompDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierCompDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierCompDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
