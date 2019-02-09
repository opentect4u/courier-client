import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { clientsRoutingModule } from './clients-routing.module';
@NgModule({
  declarations: [ClientDashboardComponent],
  imports: [
    CommonModule,
    clientsRoutingModule
  ]
})
export class ClientsModule { }
