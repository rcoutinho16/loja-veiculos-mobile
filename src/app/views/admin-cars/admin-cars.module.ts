import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCarsPageRoutingModule } from './admin-cars-routing.module';

import { AdminCarsPage } from './admin-cars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCarsPageRoutingModule
  ],
  declarations: [AdminCarsPage]
})
export class AdminCarsPageModule {}
