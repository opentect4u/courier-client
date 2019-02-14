import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierServiceOutComponent } from './courier-service-out.component';

describe('CourierServiceOutComponent', () => {
  let component: CourierServiceOutComponent;
  let fixture: ComponentFixture<CourierServiceOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierServiceOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierServiceOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
