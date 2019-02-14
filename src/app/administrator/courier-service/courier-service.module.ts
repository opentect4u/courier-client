import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourierServiceRoutingModule } from './courier-service-routing.module';
import { CourierServiceInComponent } from './courier-service-in/courier-service-in.component';
import { CourierServiceOutComponent } from './courier-service-out/courier-service-out.component';
import { CourierServiceDashboardComponent } from './courier-service-dashboard/courier-service-dashboard.component';

@NgModule({
  declarations: [CourierServiceInComponent, CourierServiceOutComponent, CourierServiceDashboardComponent],
  imports: [
    CommonModule,
    CourierServiceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CourierServiceModule { }
