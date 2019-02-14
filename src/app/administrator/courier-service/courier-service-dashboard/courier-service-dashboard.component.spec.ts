import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierServiceDashboardComponent } from './courier-service-dashboard.component';

describe('CourierServiceDashboardComponent', () => {
  let component: CourierServiceDashboardComponent;
  let fixture: ComponentFixture<CourierServiceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierServiceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierServiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
