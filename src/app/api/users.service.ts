import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private storageKey = 'users';  // Key for localStorage

  constructor() { }

  getUsersFromLocalStorage(): IUser[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  createUser(user: IUser) {
    const users = this.getUsersFromLocalStorage();
    const existingIndex = users.findIndex(u => u.email === user.email);

    if (existingIndex === -1) {
      // Add new user if not found
      users.push(user);
    } else {
      // Update existing user
      users[existingIndex] = user;
    }

    this.saveUsersToLocalStorage(users)
  }

  saveUsersToLocalStorage(users: IUser[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  deleteUser(id: number): void {
    const users = this.getUsersFromLocalStorage();
    const filteredUsers =  users.filter((user: IUser)=> user.id !== id)
  
    this.saveUsersToLocalStorage(filteredUsers);  
  }

  calculateRolePercentages(users: IUser[]) {
    const roleCount : any = {};
    const totalUsers = users.length;

    // Count occurrences of each role
    users.forEach(user => {
      roleCount[user.role] = (roleCount[user.role] || 0) + 1;
    });

    // Calculate percentages
    const rolePercentages = Object.keys(roleCount).map(role => {
      return {
        y: Number(((roleCount[role] / totalUsers) * 100).toFixed(1)),
        role,
      };
    });
    return rolePercentages;
  }

  calculateRoleCounts(): { [key: string]: number } {
    const users  = this.getUsersFromLocalStorage()
    const roleCounts: any = { Admin: 0, Supervisor: 0, Member: 0 };

    // Loop through the users array and count each role
    users.forEach(user => {
      if (user.role in roleCounts) {
        roleCounts[user.role]++;
      }
    });

    return roleCounts;
  }
}
