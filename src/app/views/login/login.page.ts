import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = {
    id: 0,
    name: '',
    email: '',
    pass: '',
    isAdmin: false,
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSubmit(form: any){
    this.user.email = form.value.email;
    this.user.pass  = form.value.pass;

    console.log(this.user.email);
    console.log(this.user.pass);

    if (this.user.email === 'admin@admin.com' && this.user.pass === 'admin') {
      this.router.navigate(['/home']);
    }else{
      console.log('Unauth');
    }
  }

}
