import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { IUser } from '../models/user';

const users:IUser[] = [
  {id:0,name:"Ahmad Sadiq", role:"admin",  email:"ahmad@gmail.com"},
  {id:1,name:"Isa Sadiq", role:"supervisor",  email:"isa@gmail.com"},
]

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
    localStorage.clear()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create actual user when createUser gets called ', () => {
    service.createUser(users[0])
    const usersInLocalStorage:IUser[] | null  = JSON.parse(localStorage.getItem("users")||"")
    expect(usersInLocalStorage).toBeTruthy();
    expect(usersInLocalStorage?.length).toBe(1);

    const name = usersInLocalStorage?.length ? usersInLocalStorage[0].name : ""

    expect(name).toBe("Ahmad Sadiq");

  });

  it('should delete  user when deleteUser gets called ', () => {
    service.createUser(users[0])
    service.deleteUser(0)
    const usersInLocalStorage:IUser[] | null  = JSON.parse(localStorage.getItem("users")||"")
    expect(usersInLocalStorage).toBeTruthy();
    expect(usersInLocalStorage?.length).toBe(0);
  });

  
  it('should calculate percentage', () => {
    const expectedPercentage = [
      {name:"admin", y:50},
      {name:"supervisor", y:50}
    ]
    const actualPercentage =  service.calculateRolePercentages(users)
    const adminPercentage =  actualPercentage.filter((item)=>item.role=='admin')[0]

    expect(expectedPercentage[0].y).toBe(adminPercentage.y);
  });

});
