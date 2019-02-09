import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

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
        component: ClientDashboardComponent,
        data: {
          title: 'Clients'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class clientsRoutingModule {}
