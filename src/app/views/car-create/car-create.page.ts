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

  constructor(private carService: CarsService,
              private router: Router) { }

  ngOnInit() {
  }

  addCar(){
    this.carService.addCar(this.car).subscribe((response) => {
      this.router.navigate(['/admin-cars']);
    });
  }

}
