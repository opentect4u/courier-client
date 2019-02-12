import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { clientsRoutingModule } from './clients-routing.module';
import { ClientAddFormComponent } from './client-add-form/client-add-form.component';
import { ClientEditFormComponent } from './client-edit-form/client-edit-form.component';

@NgModule({
  declarations: [ClientDashboardComponent, ClientAddFormComponent, ClientEditFormComponent],
  imports: [
    CommonModule,
    clientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
