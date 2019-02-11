import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administrator'
    },
    children: [
      {
        path: '',
        redirectTo: 'clients'
      },
      {
        path: 'dashboard',
        component: ClientDashboardComponent
      },
      {
        path: 'form',
        component: ClientFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class clientsRoutingModule {}
