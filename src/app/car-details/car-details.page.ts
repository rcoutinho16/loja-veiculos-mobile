import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from 'models/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {

  public car: Car;

  public cars: Car[] = [{
    id: 1,
    make: 'Volvo1',
    model: 'Volvo1',
    price: '10000',
    year: '2010',
    km: '10000',
    show: false
  },
  {
    id: 2,
    make: 'Volvo2',
    model: 'Volvo2',
    price: '10000',
    year: '2010',
    km: '10000',
    show: false
  },
  {
    id: 3,
    make: 'Volvo3',
    model: 'Volvo3',
    price: '10000',
    year: '2010',
    km: '10000',
    show: false
  },
  {
    id: 4,
    make: 'Volvo4',
    model: 'Volvo4',
    price: '10000',
    year: '2010',
    km: '10000',
    show: false
  },
  {
    id: 5,
    make: 'Volvo5',
    model: 'Volvo5',
    price: '10000',
    year: '2010',
    km: '10000',
    show: false
  },
  {
    id: 6,
    make: 'Volvo6',
    model: 'Volvo6',
    price: '10000',
    year: '2010',
    km: '10000',
    show: false
  },
  {
    id: 7,
    make: 'Volvo7',
    model: 'Volvo7',
    price: '10000',
    year: '2010',
    km: '10000',
    show: false
  },
  {
    id: 8,
    make: 'Volvo8',
    model: 'Volvo8',
    price: '10000',
    year: '2010',
    km: '10000',
    show: false
  }];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const id = Number( this.activatedRoute.snapshot.paramMap.get('id') );

    this.car = this.getCar(id);
  }

  getCar(id: number){
    return this.cars.find(e => e.id === id);
  }

}
