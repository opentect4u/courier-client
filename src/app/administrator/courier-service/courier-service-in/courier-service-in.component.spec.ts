import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierServiceInComponent } from './courier-service-in.component';

describe('CourierServiceInComponent', () => {
  let component: CourierServiceInComponent;
  let fixture: ComponentFixture<CourierServiceInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierServiceInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierServiceInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
