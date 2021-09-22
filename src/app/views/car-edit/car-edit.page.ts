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

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private carService: CarsService) { }

  ngOnInit() {

    let id: number;
    this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
    id = Number(this.currentId);

    this.car = this.carService.getCarById(id);
  }

  updateCar(){
    this.carService.updateCar(this.car);
    this.router.navigate(['/admin-cars']);
  }

}
