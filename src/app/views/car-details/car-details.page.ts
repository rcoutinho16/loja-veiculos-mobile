import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from 'src/app/models/car.model';
import { CarsService } from '../../services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {

  public car: Car;

  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(private activatedRoute: ActivatedRoute,
              private carsService: CarsService) { }

  ngOnInit() {
    const id = Number( this.activatedRoute.snapshot.paramMap.get('id') );

    this.car = this.carsService.getCarById(id);
  }

}
