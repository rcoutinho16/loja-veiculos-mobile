import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCarsPage } from './admin-cars.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCarsPageRoutingModule {}
