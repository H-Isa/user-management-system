import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/api/users.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss']
})
export class CreateUserModalComponent {

  usersList: IUser[] = []
  userForm!: FormGroup;
  emailExists: boolean = false
  

  constructor(private userService : UsersService,
              private dialogRef: MatDialogRef<CreateUserModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit(){
    this.usersList = this.userService.getUsersFromLocalStorage()

    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email,]),
      role: new FormControl("", [Validators.required]),
    })
    
    if(this.data) {
        this.userForm.setValue({
        name: this.data.name,
        email: this.data.email,
        role: this.data.role,
      })
    } 
  }

  createUser(){
    
    if (this.userForm.invalid) return

    const userId = Math.random()
    const user: IUser = {
      id: userId,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      role: this.userForm.value.role, 
    };

    const existingEmail = this.usersList.some(u => u.email === user.email);

    if (!this.data && existingEmail) {
      this.emailExists = true 
      setTimeout(() => {
        this.emailExists = false 
      }, 3000);
      return
    }

    this.userService.createUser(user)

    this.usersList = this.userService.getUsersFromLocalStorage()
    
    this.userForm.reset()

    this.dialogRef.close('yes');
  }
}
