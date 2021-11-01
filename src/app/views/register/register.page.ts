import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: User = {
    _id: '',
    username: '',
    email: '',
    password: '',
    roles: [],
    accessToken: ''
  };

  public userForm!: FormGroup;

  private errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private route: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(150)
                  ])
            ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  public register() {
    console.log(this.userForm);
    this.user.username = this.userForm.get('username').value;
    this.user.email = this.userForm.get('email').value;
    this.user.password = this.userForm.get('password').value;
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.route.navigate(['/login']);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
