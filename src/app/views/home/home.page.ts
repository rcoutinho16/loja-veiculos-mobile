import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/models/car.model';
import { CarsService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public cars: Car[] = [];

  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.getCars();
  }

}
