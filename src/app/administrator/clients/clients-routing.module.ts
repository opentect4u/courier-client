import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientAddFormComponent } from './client-add-form/client-add-form.component';
import { ClientEditFormComponent } from './client-edit-form/client-edit-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Client'
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
        component: ClientDashboardComponent
      },
      {
        path: 'add',
        data: {
          title: 'Form'
        },
        component: ClientAddFormComponent
      },
      {
        path: 'edit/:id',
        data: {
          title: 'Form'
        },
        component: ClientEditFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class clientsRoutingModule {}
