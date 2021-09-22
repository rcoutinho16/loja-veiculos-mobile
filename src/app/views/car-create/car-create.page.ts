import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from 'src/app/models/car.model';
import { CarsService } from '../../services/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.page.html',
  styleUrls: ['./car-create.page.scss'],
})
export class CarCreatePage implements OnInit {

  public car: Car = new Car();

  constructor(private carsService: CarsService,
              private route: Router) { }

  ngOnInit() {
  }

  addCar(){
    this.carsService.addCar(this.car);
    this.route.navigate(['admin-cars']);
  }

}
