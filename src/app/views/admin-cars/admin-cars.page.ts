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

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.carService.getCars().subscribe((response: Car[]) => {
      this.cars = response;
    });
  }

  delete(id: string){
    this.carService.deleteCar(id).subscribe((response) => {
      this.carService.getCars().subscribe((response2: Car[]) => {
        this.cars = response2;
      });
    });
  }

}
