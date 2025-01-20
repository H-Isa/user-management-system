import { Component } from '@angular/core';
import { UsersService } from 'src/app/api/users.service';
import { DataPoints, IRolePercentages, IUser } from 'src/app/models/user';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  usersList: IUser[] = [];
  rolePercentages : IRolePercentages[] = []
  chartOptions = {
    animationEnabled: true,
    data: [{
    type: "pie",
    startAngle: 45,
    indexLabel: "{role}: {y}",
    indexLabelPlacement: "inside",
    yValueFormatString: "#,###.##'%'",
    dataPoints: [] as DataPoints[]
    }]
  }	

  constructor(private userService : UsersService) {}
  
  ngOnInit(): void {
    this.usersList = this.userService.getUsersFromLocalStorage()
    this.chartOptions.data[0].dataPoints = this.userService.calculateRolePercentages(this.usersList) 
  }

}


