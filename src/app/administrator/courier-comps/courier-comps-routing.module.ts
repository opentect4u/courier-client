import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourierCompDashboardComponent } from './courier-comp-dashboard/courier-comp-dashboard.component';
import { CourierCompFormComponent } from './courier-comp-form/courier-comp-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Courier-Company'
    },
    children: [
      {
        path: '',
        redirectTo: 'courier-company/dashboard'
      },
      {
        path: 'dashboard',
        data: {
          title: 'Dashboard'
        },
        component: CourierCompDashboardComponent
      },
      {
        path: 'form',
        data: {
          title: 'Form'
        },
        component: CourierCompFormComponent
      },
      {
        path: 'form/:id',
        data: {
          title: 'Form'
        },
        component: CourierCompFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourierCompsRoutingModule { }
