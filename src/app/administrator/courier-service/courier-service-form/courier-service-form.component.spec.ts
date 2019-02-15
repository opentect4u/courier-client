import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierServiceFormComponent } from './courier-service-form.component';

describe('CourierServiceFormComponent', () => {
  let component: CourierServiceFormComponent;
  let fixture: ComponentFixture<CourierServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
