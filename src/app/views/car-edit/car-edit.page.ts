import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Car } from 'src/app/models/car.model';
import { CarsService } from '../../services/car.service';
@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.page.html',
  styleUrls: ['./car-edit.page.scss'],
})
export class CarEditPage implements OnInit {

  public currentId: any;

  public car: Car = new Car();

  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private carService: CarsService) { }

  ngOnInit() {
    this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.carService.getCarById(this.currentId).subscribe((response: Car) => {
      this.car = response;
      console.log(this.car);
    });
  }

  updateCar(){
    this.carService.updateCar(this.car).subscribe((response) => {
      this.router.navigate(['/admin-cars']);
    });
  }

}
