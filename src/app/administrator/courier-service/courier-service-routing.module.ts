import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourierServiceDashboardComponent } from './courier-service-dashboard/courier-service-dashboard.component';
import { CourierServiceInComponent } from './courier-service-in/courier-service-in.component';
import { CourierServiceOutComponent } from './courier-service-out/courier-service-out.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Courier Service'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        data: {
          title: 'Dashboard'
        },
        component: CourierServiceDashboardComponent
      },
      {
        path: 'in',
        data: {
          title: 'In'
        },
        component: CourierServiceInComponent
      },
      {
        path: 'out/:id',
        data: {
          title: 'Out'
        },
        component: CourierServiceOutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourierServiceRoutingModule { }
