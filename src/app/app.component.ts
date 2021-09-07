import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'car' },
    { title: 'About Us', url: '/about-us', icon: 'information' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Admin', url: '/admin', icon: 'settings' },
    { title: 'Admin Cars', url: '/admin-cars', icon: 'car-sport' },
  ];
  constructor() {}
}
