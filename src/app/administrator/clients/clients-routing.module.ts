import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientAddFormComponent } from './client-add-form/client-add-form.component';
import { ClientEditFormComponent } from './client-edit-form/client-edit-form.component';

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
        path: 'add',
        component: ClientAddFormComponent
      },
      {
        path: 'edit/:id',
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
