import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { PieChartComponent } from 'src/app/shared/components/pie-chart/pie-chart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IRoleCount, IRolePercentages, IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/api/users.service';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogRef } from '@angular/material/dialog';

const users:IUser[] = [
  {id:0,name:"Ahmad Sadiq", role:"admin",  email:"ahmad@gmail.com"},
  {id:1,name:"Isa Sadiq", role:"supervisor",  email:"isa@gmail.com"},
]

const roleCounts: IRoleCount = {
  Admin : 0,
  Supervisor: 0,
  Member: 0
}

const rolePercentages : IRolePercentages = {
  y: "Admin",
  role: 30
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockUserService: jasmine.SpyObj<UsersService>

  beforeEach(() => {
    mockUserService = jasmine.createSpyObj('UserService',{'getUsersFromLocalStorage':users, 
                                                          'calculateRoleCounts': roleCounts, 
                                                          'calculateRolePercentages': rolePercentages})

    TestBed.configureTestingModule({
      declarations: [DashboardComponent], 
      imports:[SharedModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {provide:UsersService, useValue: mockUserService},
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user list from userService', () => {
    expect(component.usersList[0].email).toBe(users[0].email);
  });

  it('should show total number of users', () => {
    const totalUsers = fixture.debugElement.query(By.css('p[test-id="total-users"]'));

    expect(totalUsers.nativeElement.textContent).toBe(users.length + "");
  });
});
