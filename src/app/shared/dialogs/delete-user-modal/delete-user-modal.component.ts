import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/api/users.service';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent {

  constructor(private dialogRef: MatDialogRef<DeleteUserModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data : any,
              private userService : UsersService){}

  confirmDelete(): void {
    this.userService.deleteUser(this.data.id)
    this.dialogRef.close('yes');
  }

  close(){
      this.dialogRef.close()
  }
}
