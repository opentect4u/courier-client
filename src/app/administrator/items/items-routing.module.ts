import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsDashboardComponent } from './items-dashboard/items-dashboard.component';
import { ItemFormComponent } from './item-form/item-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Items'
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
        component: ItemsDashboardComponent
      },
      {
        path: 'form',
        data: {
          title: 'Form'
        },
        component: ItemFormComponent
      },
      {
        path: 'form/:id',
        data: {
          title: 'Form'
        },
        component: ItemFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
