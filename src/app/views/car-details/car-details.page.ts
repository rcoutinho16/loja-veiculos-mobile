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

  public car: Car = new Car();

  public currentId: string;

  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarsService) { }

  ngOnInit() {
    this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.currentId);
    this.carService.getCarById(this.currentId).subscribe((response: Car) => {
      console.log(response);
      this.car = response;
    });
  }

}
