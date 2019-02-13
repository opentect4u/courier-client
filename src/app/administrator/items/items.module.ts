import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsDashboardComponent } from './items-dashboard/items-dashboard.component';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  declarations: [ItemsDashboardComponent, ItemFormComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }
