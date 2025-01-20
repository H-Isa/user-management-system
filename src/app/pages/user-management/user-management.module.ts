import { NgModule } from '@angular/core';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UserManagementComponent
  ],
  imports: [
    SharedModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
