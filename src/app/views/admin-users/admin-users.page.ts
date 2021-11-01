import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
})
export class AdminUsersPage implements OnInit {

  public users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }

  delete(id: string){
    this.userService.deleteCar(id).subscribe((response) => {
      this.userService.getUsers().subscribe((response2: User[]) => {
        this.users = response2;
      });
    });
  }

}
