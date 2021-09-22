import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/models/car.model';
import { CarsService } from '../../services/car.service';

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.page.html',
  styleUrls: ['./admin-cars.page.scss'],
})
export class AdminCarsPage implements OnInit {

  public cars: Car[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.getCars();
  }

  delete(id: number){
    this.carsService.deleteCar(id);
  }

}
