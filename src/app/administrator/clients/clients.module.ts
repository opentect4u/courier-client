import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { clientsRoutingModule } from './clients-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  declarations: [ClientDashboardComponent, ClientFormComponent],
  imports: [
    CommonModule,
    clientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
