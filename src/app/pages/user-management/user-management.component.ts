import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/api/users.service';
import { IUser } from 'src/app/models/user';
import { CreateUserModalComponent } from 'src/app/shared/dialogs/create-user-modal/create-user-modal.component';
import { DeleteUserModalComponent } from 'src/app/shared/dialogs/delete-user-modal/delete-user-modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent { 

  usersList: IUser[] = []
  userForm!: FormGroup;

  constructor(private userService : UsersService, private dialog: MatDialog,) {
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      role: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit() {
    this.usersList = this.userService.getUsersFromLocalStorage()
  }

  createUser(){
    const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
    buttonElement.blur();
    
    const dialogRef = this.dialog.open(CreateUserModalComponent, {
      width: '100%',  
      maxWidth: '25rem', 
    })

    dialogRef.afterClosed().subscribe((res: string) => {
      if (res === 'yes') {
        this.usersList = this.userService.getUsersFromLocalStorage()
      }
    });
  }

  deleteUser(id: number){
    const dialogRef = this.dialog.open(DeleteUserModalComponent, {
      width: '100%',  
      maxWidth: '25rem',
      data: {id: id},
    })

    dialogRef.afterClosed().subscribe((res: string) => {
      if (res === 'yes') {
        this.usersList = this.userService.getUsersFromLocalStorage()
      }
    });
  }

  editUser(user: IUser){
    const dialogRef = this.dialog.open(CreateUserModalComponent, {
      width: '100%',  
      maxWidth: '25rem', 
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })

    dialogRef.afterClosed().subscribe((res: string) => {
      if (res === 'yes') {
        this.usersList = this.userService.getUsersFromLocalStorage()
      }
    });
  }
}
