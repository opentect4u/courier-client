import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourierCompsRoutingModule } from './courier-comps-routing.module';
import { CourierCompFormComponent } from './courier-comp-form/courier-comp-form.component';
import { CourierCompDashboardComponent } from './courier-comp-dashboard/courier-comp-dashboard.component';

@NgModule({
  declarations: [CourierCompFormComponent, CourierCompDashboardComponent],
  imports: [
    CommonModule,
    CourierCompsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CourierCompsModule { }
