import { Component } from '@angular/core';
import { UsersService } from 'src/app/api/users.service';
import { IRoleCount, IRolePercentages, IUser } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent {
  usersList: IUser[] = []
  rolePercentages : IRolePercentages[] = []
  roleCount! : IRoleCount | any;

  constructor(private userService : UsersService) {}

  ngOnInit() {
    this.usersList = this.userService.getUsersFromLocalStorage() 
    this.roleCount = this.userService.calculateRoleCounts()
  }  
}

